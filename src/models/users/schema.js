const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  login: {
    type: String,
    required: [true],
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: [true],
  },
});

module.exports = { schema };
