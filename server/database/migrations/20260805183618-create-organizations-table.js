"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("organizations", {

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

                onDelete: "RESTRICT",
                onUpdate: "CASCADE",
            },

            organization_request_id: {
                type: Sequelize.BIGINT.UNSIGNED,

                allowNull: false,

                references: {
                    model: "organization_requests",
                    key: "id",
                },

                onDelete: "RESTRICT",
                onUpdate: "CASCADE",
            },

            name: {
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
            },

            phone: {
                type: Sequelize.STRING(20),
            },

            website: {
                type: Sequelize.STRING(255),
            },

            description: {
                type: Sequelize.TEXT,
            },

            status: {
                type: Sequelize.ENUM(
                    "ACTIVE",
                    "INACTIVE",
                    "SUSPENDED"
                ),
                defaultValue: "ACTIVE",
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

        await queryInterface.dropTable("organizations");

    },
};