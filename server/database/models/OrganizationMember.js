const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/database");

const OrganizationMember = sequelize.define(
    "OrganizationMember",
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        organization_id:
            DataTypes.BIGINT.UNSIGNED,

        user_id:
            DataTypes.BIGINT.UNSIGNED,

        role: DataTypes.ENUM(
            "OWNER",
            "ADMIN",
            "MANAGER",
            "STAFF"
        ),

        status: DataTypes.ENUM(
            "ACTIVE",
            "INACTIVE"
        ),

        joined_at: DataTypes.DATE,

    },
    {
        tableName: "organization_members",
        timestamps: true,
        underscored: true,
    }
);

OrganizationMember.associate = (models) => {

    OrganizationMember.belongsTo(
        models.Organization,
        {
            foreignKey: "organization_id",
            as: "organization",
        }
    );

    OrganizationMember.belongsTo(
        models.User,
        {
            foreignKey: "user_id",
            as: "user",
        }
    );

};

module.exports = OrganizationMember;