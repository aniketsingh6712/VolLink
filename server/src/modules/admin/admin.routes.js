const express = require("express");
const ROLES = require("../../config/roles");
const router = express.Router();
const authenticate = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/authorize.middleware");
const controller = require("./admin.controller");

router.patch(
    "/organization-requests/:id/approve",
    authenticate,
    authorize(ROLES.SUPER_ADMIN),
    controller.approveOrganizationRequest
);

module.exports = router;