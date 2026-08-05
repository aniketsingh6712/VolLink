const express = require("express");

const router = express.Router();

const authenticate = require("../../middleware/auth.middleware");

router.get(
    "/me",
    authenticate,
    (req, res) => {

        return res.json({
            success: true,
            data: req.user,
        });

    }
);

module.exports = router;