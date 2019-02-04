const mongoose = require('mongoose');
const { schema } = require('./schema');


const Users = mongoose.model('User', schema);
module.exports = { Users };
