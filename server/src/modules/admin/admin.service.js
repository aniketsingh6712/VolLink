const sequelize = require("../../config/database");

const repository = require("./admin.repository");

const AppError = require("../../utils/AppError");

const approveOrganizationRequest = async (
    requestId,
    adminId
) => {

    const request =
        await repository.findRequestById(requestId);

    if (!request) {
        throw new AppError(
            "Organization request not found",
            404
        );
    }

    if (request.status !== "PENDING") {
        throw new AppError(
            "Request has already been processed",
            400
        );
    }

    const transaction =
        await sequelize.transaction();

    try {

        await repository.updateRequest(
            request,
            {
                status: "APPROVED",
                reviewed_by: adminId,
                reviewed_at: new Date(),
            },
            {
                transaction,
            }
        );

        const organization =
            await repository.createOrganization(
                {
                    owner_user_id:
                        request.owner_user_id,

                    organization_request_id:
                        request.id,

                    name:
                        request.organization_name,

                    organization_type:
                        request.organization_type,

                    email:
                        request.email,

                    phone:
                        request.phone,

                    website:
                        request.website,

                    description:
                        request.description,
                },
                {
                    transaction,
                }
            );

        await repository.createOrganizationMember(
            {
                organization_id:
                    organization.id,

                user_id:
                    request.owner_user_id,

                role: "OWNER",

                status: "ACTIVE",
            },
            {
                transaction,
            }
        );

        await transaction.commit();

        return organization;

    } catch (error) {

        await transaction.rollback();

        throw error;

    }

};

module.exports = {
    approveOrganizationRequest,
};