"use strict";

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("organization_members", {

            id: {

                type: Sequelize.BIGINT.UNSIGNED,

                primaryKey: true,

                autoIncrement: true,

                allowNull: false,

            },

            organization_id: {

                type: Sequelize.BIGINT.UNSIGNED,

                allowNull: false,

                references: {

                    model: "organizations",

                    key: "id",

                },

                onDelete: "CASCADE",

                onUpdate: "CASCADE",

            },

            user_id: {

                type: Sequelize.BIGINT.UNSIGNED,

                allowNull: false,

                references: {

                    model: "users",

                    key: "id",

                },

                onDelete: "CASCADE",

                onUpdate: "CASCADE",

            },

            role: {

                type: Sequelize.ENUM(
                    "OWNER",
                    "ADMIN",
                    "MANAGER",
                    "STAFF"
                ),

                allowNull: false,

            },

            status: {

                type: Sequelize.ENUM(
                    "ACTIVE",
                    "INACTIVE"
                ),

                defaultValue: "ACTIVE",

            },

            joined_at: {

                type: Sequelize.DATE,

                defaultValue:
                    Sequelize.literal("CURRENT_TIMESTAMP"),

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

        await queryInterface.addConstraint(
            "organization_members",
            {

                fields: [
                    "organization_id",
                    "user_id",
                ],

                type: "unique",

                name: "uk_org_member",

            }
        );

    },

    async down(queryInterface) {

        await queryInterface.dropTable(
            "organization_members"
        );

    },

};