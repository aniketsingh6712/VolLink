"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("organization_documents", {

            id: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            organization_request_id: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,

                references: {
                    model: "organization_requests",
                    key: "id",
                },

                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },

            document_type: {
                type: Sequelize.ENUM(
                    "REGISTRATION_CERTIFICATE",
                    "PAN",
                    "GST",
                    "AUTHORIZATION_LETTER",
                    "IDENTITY_PROOF",
                    "ADDRESS_PROOF",
                    "OTHER"
                ),
                allowNull: false,
            },

            file_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },

            file_url: {
                type: Sequelize.STRING(500),
                allowNull: false,
            },

            verification_status: {
                type: Sequelize.ENUM(
                    "PENDING",
                    "VERIFIED",
                    "REJECTED"
                ),
                defaultValue: "PENDING",
            },

            remarks: {
                type: Sequelize.TEXT,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal(
                    "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
                ),
            },
        });

    },

    async down(queryInterface) {

        await queryInterface.dropTable(
            "organization_documents"
        );

    },
};