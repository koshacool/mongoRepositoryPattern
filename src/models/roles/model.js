const mongoose = require('mongoose');
const { schema } = require('./schema');


const Roles = mongoose.model('roles', schema);
module.exports = { Roles };
