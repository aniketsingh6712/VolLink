const asyncHandler = require("../../utils/asyncHandler");

const ApiResponse = require("../../utils/apiResponse");

const service = require("./admin.service");

const approveOrganizationRequest =
    asyncHandler(async (req, res) => {

        const organization =
            await service.approveOrganizationRequest(
                req.params.id,
                req.user.id
            );

        return ApiResponse.success(
            res,
            "Organization approved successfully",
            organization
        );

    });

module.exports = {
    approveOrganizationRequest,
};