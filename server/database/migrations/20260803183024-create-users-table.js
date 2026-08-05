"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {

            id: {
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            role_id: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
                defaultValue: 2,
                references: {
                    model: "roles",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "RESTRICT",
            },

            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },

            password_hash: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },

            status: {
                type: Sequelize.ENUM(
                    "ACTIVE",
                    "INACTIVE",
                    "SUSPENDED",
                    "PENDING_VERIFICATION"
                ),
                defaultValue: "PENDING_VERIFICATION",
                allowNull: false,
            },

            email_verified: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },

            last_login: {
                type: Sequelize.DATE,
            },

            failed_login_attempts: {
                type: Sequelize.INTEGER.UNSIGNED,
                defaultValue: 0,
            },

            locked_until: {
                type: Sequelize.DATE,
            },

            deleted_at: {
                type: Sequelize.DATE,
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

        await queryInterface.addIndex("users", ["email"], {
            unique: true,
            name: "idx_users_email",
        });

        await queryInterface.addIndex("users", ["role_id"]);

        await queryInterface.addIndex("users", ["status"]);
    },

    async down(queryInterface) {
        await queryInterface.dropTable("users");
    },
};