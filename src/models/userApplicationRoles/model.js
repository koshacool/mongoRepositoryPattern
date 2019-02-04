const mongoose = require('mongoose');
const { schema } = require('./schema');


const UserApplicationRoles = mongoose.model('userApplicationRoles', schema);
module.exports = { UserApplicationRoles };
