const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = {
    helmet,
    hpp,
    apiLimiter,
};