const express = require("express");

const router = express.Router();

const authenticate = require("../../middleware/auth.middleware");

const validate = require("../../middleware/validation.middleware");

const controller = require("./organization.controller");

const {
    createOrganizationRequestSchema,
} = require("./organization.validation");

router.post(
    "/request",
    authenticate,
    validate(createOrganizationRequestSchema),
    controller.createRequest
);

module.exports = router;