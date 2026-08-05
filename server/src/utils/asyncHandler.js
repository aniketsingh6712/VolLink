const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = asyncHandler;

// controller becomes
// exports.login = asyncHandler(async (req, res) => {

// });