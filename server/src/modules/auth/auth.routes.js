const express = require("express");

const router = express.Router();

const controller = require("./auth.controller");

const validate = require("../../middleware/validation.middleware");
const {
    registerSchema,
    loginSchema,
} = require("./auth.validation");

router.post(
    "/register",
    validate(registerSchema),
    controller.register
);
router.post(
    "/login",
    validate(loginSchema),
    controller.login
);


module.exports = router;