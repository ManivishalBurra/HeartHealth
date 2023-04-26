const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  age: Number,
  ca: Number,
  chol: Number,
  cp: Number,
  exang: Number,
  fbs: Number,
  gender: String,
  maxRate: Number,
  oldpeak: Number,
  restbp: Number,
  restecg: Number,
  sex: Number,
  slope: Number,
  result: Number,
  user_id: String,
  createdOn: Date,
});

module.exports = mongoose.model("Report", reportSchema, "Report");