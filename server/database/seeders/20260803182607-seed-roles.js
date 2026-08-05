"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("roles", [
            {
                name: "SUPER_ADMIN",
                description: "Platform Administrator",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "USER",
                description: "Default User",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("roles", null, {});
    },
};