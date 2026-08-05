const {
    OrganizationRequest,
    OrganizationDocument,
} = require("../../../database/models");

const findPendingRequest = (userId) => {
    return OrganizationRequest.findOne({
        where: {
            owner_user_id: userId,
            status: "PENDING",
        },
    });
};

const createRequest = (payload, options = {}) => {
    return OrganizationRequest.create(payload, options);
};

const createDocuments = (payload, options = {}) => {
    return OrganizationDocument.bulkCreate(payload, options);
};

module.exports = {
    findPendingRequest,
    createRequest,
    createDocuments,
};