const bcrypt = require("bcrypt");
const repository = require("./auth.repository");
const AppError = require("../../utils/AppError");
const jwtHelper = require("./auth.helper");
const sequelize = require("../../config/database");
const userRepository = require("../users/user.repository");

const register = async ({ email, password, firstName, lastName }) => {
    const existingUser = await repository.findByEmail(email);
    if (existingUser) {
        throw new AppError("Email already exist", 409);
    }
    const transaction = await sequelize.transaction();
    try {
        const passwordHash = await bcrypt.hash(password, 12);
        const user = await repository.createUser(
            { email, password_hash: passwordHash },
            { transaction },
        );
        await userRepository.createProfile(
            {
                user_id: user.id,
                first_name: firstName,
                last_name: lastName,
            },
            { transaction },
        );
        await transaction.commit();
        return { id: user.id, email: user.email };
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
};

//login function
const login = async ({ email, password }) => {
    const user = await repository.findByEmail(email);

    if (!user) {
        throw new AppError("Invalid email or password", 401);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordCorrect) {
        throw new AppError("Invalid email or password", 401);
    }

    if (user.status !== "ACTIVE") {
        throw new AppError("Account is not active", 403);
    }

    await repository.updateLastLogin(user.id);

    const token = jwtHelper.generateAccessToken({
        id: user.id,
        roleId: user.role.id,
        role:user.role.name
    });

    return {
        accessToken: token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role.name
        },
    };
};
module.exports = {
    register,
    login,
};
