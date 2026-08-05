const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../src/config/database");

class Role extends Model {
    static associate(models) {
        Role.hasMany(models.User, {
            foreignKey: "role_id",
            as: "users",
        });
    }
}

Role.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },

        description: {
            type: DataTypes.STRING(255),
        },
    },
    {
        sequelize,
        modelName: "Role",
        tableName: "roles",

        timestamps: true,

        underscored: true,
    },
);

module.exports = Role;
