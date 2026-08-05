const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/database");

const OrganizationRequest = sequelize.define(
    "OrganizationRequest",
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        owner_user_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },

        organization_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        organization_type: {
            type: DataTypes.ENUM(
                "NGO",
                "COMPANY",
                "COLLEGE",
                "CLUB",
                "GOVERNMENT",
                "COMMUNITY",
                "OTHER"
            ),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

        website: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        status: {
            type: DataTypes.ENUM(
                "PENDING",
                "UNDER_REVIEW",
                "APPROVED",
                "REJECTED",
                "NEEDS_MORE_INFO"
            ),
            defaultValue: "PENDING",
            allowNull: false,
        },

        reviewed_by: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
        },

        reviewed_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        rejection_reason: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        tableName: "organization_requests",
        timestamps: true,
        underscored: true,
    }
);

OrganizationRequest.associate = (models) => {
    OrganizationRequest.belongsTo(models.User, {
        foreignKey: "owner_user_id",
        as: "owner",
    });
    OrganizationRequest.hasMany(
        models.OrganizationDocument,
        {
            foreignKey: "organization_request_id",
            as: "documents",
        }
    );
    OrganizationRequest.hasOne(
    models.Organization,
    {
        foreignKey: "organization_request_id",
        as: "organization",
    }
);

    // Uncomment later when admin review is implemented
    // OrganizationRequest.belongsTo(models.User, {
    //     foreignKey: "reviewed_by",
    //     as: "reviewer",
    // });
};

module.exports = OrganizationRequest;