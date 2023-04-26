const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user_id: String,
  doctorName: String,
  specialisation: String,
  appointment: Date,
});

module.exports = mongoose.model("Appointment", appointmentSchema, "Appointment");
