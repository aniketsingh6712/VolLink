const { UserProfile } = require("../../../database/models");

const createProfile = (payload, options = {}) => {
    return UserProfile.create(payload, options);
};

module.exports = {
    createProfile,
};