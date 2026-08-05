const {
    OrganizationRequest,
    Organization,
    OrganizationMember,
} = require("../../../database/models");

const findRequestById = (id) => {
    return OrganizationRequest.findByPk(id);
};

const updateRequest = (request, payload, options = {}) => {
    return request.update(payload, options);
};

const createOrganization = (payload, options = {}) => {
    return Organization.create(payload, options);
};

const createOrganizationMember = (payload, options = {}) => {
    return OrganizationMember.create(payload, options);
};

module.exports = {
    findRequestById,
    updateRequest,
    createOrganization,
    createOrganizationMember,
};