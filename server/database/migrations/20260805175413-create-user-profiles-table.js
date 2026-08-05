"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("user_profiles", {

            id: {
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            user_id: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
                unique: true,

                references: {
                    model: "users",
                    key: "id",
                },

                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },

            first_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },

            last_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },

            phone: {
                type: Sequelize.STRING(20),
            },

            date_of_birth: {
                type: Sequelize.DATEONLY,
            },

            gender: {
                type: Sequelize.ENUM(
                    "MALE",
                    "FEMALE",
                    "OTHER"
                ),
            },

            avatar_url: {
                type: Sequelize.STRING(500),
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
        await queryInterface.dropTable("user_profiles");
    },
};