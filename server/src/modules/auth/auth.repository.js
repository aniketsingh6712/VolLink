const { User } = require("../../../database/models");

const findByEmail = async (email) => {
    return User.findOne({
        where: { email },
        include:[
            {
                association:"role",
                attributes:["id","name"]
            }
        ]
    });
};

const createUser = async (payload,options ={}) => {
    return User.create(payload,options);
};
const updateLastLogin = (userId) => {
    return User.update(
        {
            last_login: new Date(),
        },
        {
            where: {
                id: userId,
            },
        }
    );
};
const findById = (id) => {
    return User.findByPk(id,{
        include:[
            {
                association:"role",
                attributes:["id","name"]
            }
        ]
    })
};
module.exports = {
    findByEmail,
    createUser,
    updateLastLogin,
    findById,
};