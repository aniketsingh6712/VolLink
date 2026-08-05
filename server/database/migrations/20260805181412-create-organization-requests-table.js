"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("organization_requests", {

            id: {
                type: Sequelize.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            owner_user_id: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,

                references: {
                    model: "users",
                    key: "id",
                },

                onDelete: "CASCADE",

                onUpdate: "CASCADE",
            },

            organization_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },

            organization_type: {
                type: Sequelize.ENUM(
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
                type: Sequelize.STRING(255),
                allowNull: false,
            },

            phone: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },

            website: {
                type: Sequelize.STRING(255),
            },

            description: {
                type: Sequelize.TEXT,
            },

            status: {
                type: Sequelize.ENUM(
                    "PENDING",
                    "UNDER_REVIEW",
                    "APPROVED",
                    "REJECTED"
                ),

                defaultValue: "PENDING",
            },

            reviewed_by: {
                type: Sequelize.BIGINT.UNSIGNED,
            },

            reviewed_at: {
                type: Sequelize.DATE,
            },

            rejection_reason: {
                type: Sequelize.TEXT,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue:
                    Sequelize.literal("CURRENT_TIMESTAMP"),
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue:
                    Sequelize.literal(
                        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
                    ),
            },
        });

    },

    async down(queryInterface) {

        await queryInterface.dropTable(
            "organization_requests"
        );

    },
};