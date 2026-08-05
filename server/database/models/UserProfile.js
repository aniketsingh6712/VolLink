const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/database");

const UserProfile = sequelize.define(
    "UserProfile",
    {

        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        user_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },

        first_name: DataTypes.STRING(100),

        last_name: DataTypes.STRING(100),

        phone: DataTypes.STRING(20),

        date_of_birth: DataTypes.DATEONLY,

        gender: DataTypes.ENUM(
            "MALE",
            "FEMALE",
            "OTHER"
        ),

        avatar_url: DataTypes.STRING(500),

    },
    {

        tableName: "user_profiles",

        timestamps: true,

        underscored: true,

    }
);

UserProfile.associate = (models) => {

    UserProfile.belongsTo(models.User, {

        foreignKey: "user_id",

        as: "user",

    });

};

module.exports = UserProfile;