const Role = require("./Role");
const User = require("./User");
const UserProfile= require("./UserProfile");
const OrganizationRequest = require("./organizationRequest");
const OrganizationDocument = require("./OrganizationDocument");
const Organization = require("./Organization");
const OrganizationMember = require("./OrganizationMember");

const models = {
    Role,
    User,
    UserProfile,
    OrganizationRequest,
    OrganizationDocument,
    Organization,
    OrganizationMember,
};

Object.values(models).forEach((model) => {
    if (model.associate) {
        model.associate(models);
    }
});

module.exports = models;