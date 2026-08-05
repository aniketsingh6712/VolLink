const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
            ecmaVersion: "latest",
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];