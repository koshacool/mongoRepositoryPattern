const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  applicationId: {
    type: String,
    required: [true],
  },
  userId: {
    type: String,
    required: [true],
  },
  roleId: {
    type: String,
    required: [true],
  },
});

module.exports = { schema };
