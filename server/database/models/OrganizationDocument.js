const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/database");

const OrganizationDocument = sequelize.define(
    "OrganizationDocument",
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        organization_request_id:
            DataTypes.BIGINT.UNSIGNED,

        document_type: DataTypes.ENUM(
            "REGISTRATION_CERTIFICATE",
            "PAN",
            "GST",
            "AUTHORIZATION_LETTER",
            "IDENTITY_PROOF",
            "ADDRESS_PROOF",
            "OTHER"
        ),

        file_name: DataTypes.STRING,

        file_url: DataTypes.STRING,

        verification_status: DataTypes.ENUM(
            "PENDING",
            "VERIFIED",
            "REJECTED"
        ),

        remarks: DataTypes.TEXT,

    },
    {
        tableName: "organization_documents",
        timestamps: true,
        underscored: true,
    }
);

OrganizationDocument.associate = (models) => {

    OrganizationDocument.belongsTo(
        models.OrganizationRequest,
        {
            foreignKey: "organization_request_id",
            as: "request",
        }
    );

};

module.exports = OrganizationDocument;