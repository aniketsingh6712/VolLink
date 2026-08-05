const express = require("express");

const router = express.Router();
const authRoutes = require("../modules/auth/auth.routes");
const userRoutes = require("../modules/user/user.routes")
const organizationRoutes = require("../modules/organization/organization.routes");
const adminRoutes = require("../modules/admin/admin.routes")
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/organizations",organizationRoutes);
router.use("/admin", adminRoutes);

router.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "VOL-LINK API Working",
    });
});

module.exports = router;