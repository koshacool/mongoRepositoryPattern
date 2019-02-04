const mongoose = require('mongoose');
const { schema } = require('./schema');


const Applications = mongoose.model('applications', schema);
module.exports = { Applications };
