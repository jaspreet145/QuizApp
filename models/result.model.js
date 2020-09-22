const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  pin: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

const result = mongoose.model("result", resultSchema);

module.exports = result;
