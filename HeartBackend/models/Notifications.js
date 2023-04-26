const mongoose = require("mongoose");

const NotificationsSchema = new mongoose.Schema({
  useremail: String,
  requests: [
    { senderemail: String, senderName: String, senderProfilePic: String },
  ],
  approvals: [
    { approveremail: String, approverName: String, approverProfilePic: String },
  ],
});

module.exports = mongoose.model(
  "Notifications",
  NotificationsSchema,
  "Notifications"
);
