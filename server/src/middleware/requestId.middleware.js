const { nanoid } = require("nanoid");

module.exports = (req, res, next) => {
    req.requestId = nanoid(12);

    res.setHeader("X-Request-ID", req.requestId);

    next();
};