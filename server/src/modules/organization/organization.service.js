const sequelize = require("../../config/database");

const repository = require("./organization.repository");

const AppError = require("../../utils/AppError");

const createRequest = async (payload, userId) => {

    const existing =
        await repository.findPendingRequest(userId);

    if (existing) {
        throw new AppError(
            "You already have a pending organization request.",
            409
        );
    }

    const transaction =
        await sequelize.transaction();

    try {

        const request =
            await repository.createRequest(
                {
                    owner_user_id: userId,

                    organization_name:
                        payload.organizationName,

                    organization_type:
                        payload.organizationType,

                    email: payload.email,

                    phone: payload.phone,

                    website: payload.website,

                    description:
                        payload.description,
                },
                {
                    transaction,
                }
            );

        const documents =
            payload.documents.map((doc) => ({
                organization_request_id:
                    request.id,

                document_type:
                    doc.documentType,

                file_name:
                    doc.fileName,

                file_url:
                    doc.fileUrl,
            }));

        await repository.createDocuments(
            documents,
            {
                transaction,
            }
        );

        await transaction.commit();

        return request;

    } catch (error) {

        await transaction.rollback();

        throw error;

    }

};

module.exports = {
    createRequest,
};