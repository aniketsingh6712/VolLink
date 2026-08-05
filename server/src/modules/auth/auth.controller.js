const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/apiResponse");

const authService = require("./auth.service");

const register = asyncHandler(async (req, res) => {

    const user = await authService.register(req.validatedData.body);

    return ApiResponse.success(
        res,
        "User registered successfully",
        user,
        201
    );

});
const login = asyncHandler(async (req, res) => {

    const result = await authService.login(
        req.validatedData.body
    );

    return ApiResponse.success(
        res,
        "Login successful",
        result
    );

});
module.exports = {
    register,
    login,
};