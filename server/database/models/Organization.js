const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/database");

const Organization = sequelize.define(
    "Organization",
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        owner_user_id: DataTypes.BIGINT.UNSIGNED,

        organization_request_id:
            DataTypes.BIGINT.UNSIGNED,

        name: DataTypes.STRING,

        organization_type: DataTypes.ENUM(
            "NGO",
            "COMPANY",
            "COLLEGE",
            "CLUB",
            "GOVERNMENT",
            "COMMUNITY",
            "OTHER"
        ),

        email: DataTypes.STRING,

        phone: DataTypes.STRING,

        website: DataTypes.STRING,

        description: DataTypes.TEXT,

        status: DataTypes.ENUM(
            "ACTIVE",
            "INACTIVE",
            "SUSPENDED"
        ),

    },
    {
        tableName: "organizations",
        timestamps: true,
        underscored: true,
    }
);

Organization.associate = (models) => {

    Organization.belongsTo(models.User, {
        foreignKey: "owner_user_id",
        as: "owner",
    });

    Organization.belongsTo(
        models.OrganizationRequest,
        {
            foreignKey:
                "organization_request_id",
            as: "request",
        }
    );

    Organization.hasMany(
        models.OrganizationMember,
        {
            foreignKey: "organization_id",
            as: "members",
        }
    );

};

module.exports = Organization;