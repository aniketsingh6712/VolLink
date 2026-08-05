const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/database");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        role_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },

        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        status: {
            type: DataTypes.ENUM("ACTIVE", "INACTIVE", "SUSPENDED", "PENDING_VERIFICATION"),
            allowNull: false,
            defaultValue: "PENDING_VERIFICATION",
        },

        email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },

        last_login: {
            type: DataTypes.DATE,
        },

        failed_login_attempts: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },

        locked_until: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "users",
        timestamps: true,
        paranoid: true,
        underscored: true,
        deletedAt: "deleted_at",
    },
);

User.associate = (models) => {
    User.belongsTo(models.Role, {
        foreignKey: "role_id",
        as: "role",
    });

    User.hasOne(models.UserProfile, {
        foreignKey: "user_id",
        as: "profile",
    });
    User.hasMany(models.OrganizationRequest, {
        foreignKey: "owner_user_id",
        as: "organizationRequests",
    });
    User.hasMany(models.OrganizationMember, {
        foreignKey: "user_id",
        as: "organizationMemberships",
    });

    User.hasMany(models.Organization, {
        foreignKey: "owner_user_id",
        as: "ownedOrganizations",
    });
};

module.exports = User;
