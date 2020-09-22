const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSchema = new Schema({
  pin: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
});

const test = mongoose.model("test", testSchema);

module.exports = test;
