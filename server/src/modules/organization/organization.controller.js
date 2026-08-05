const asyncHandler = require("../../utils/asyncHandler");

const ApiResponse = require("../../utils/apiResponse");

const service = require("./organization.service");

const createRequest = asyncHandler(
    async (req, res) => {

        const request =
            await service.createRequest(
                req.validatedData.body,
                req.user.id
            );

        return ApiResponse.success(
            res,
            "Organization request submitted successfully",
            request,
            201
        );

    }
);

module.exports = {
    createRequest,
};