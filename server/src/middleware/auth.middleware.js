const asyncHandler = require("../../utils/asyncHandler");
const AppError = require("../utils/AppError");

const {verifyAccessToken} = require("../modules/auth/auth.helper");
const authRepository = require("../modules/auth/auth.repository");

const authenticate = asyncHandler(async (req,res,next)=>{
    const authHeader = req.header.authorization;
    if(!authHeader){
        throw new AppError("Authorization header missing",401);
    }
    if(!authHeader.startsWith("Bearer ")){
        throw new AppError("Invalid authorization format",401);
    }
     const token = authHeader.split(" ")[1];

    const decoded = verifyAccessToken(token);

    const user = await authRepository.findById(decoded.id);

    if (!user) {
        throw new AppError("User not found", 401);
    }

    if (user.status !== "ACTIVE") {
        throw new AppError("User account is inactive", 403);
    }

    req.user = {
        id: user.id,
        roleId: user.role.id,
        email: user.email,
        role:user.role.name
    };

    next();
})
module.exports = authenticate;