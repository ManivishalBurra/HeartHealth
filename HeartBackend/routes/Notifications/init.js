const app = require("express")();

const getNotifications = require("./getNotifications");
const addrequest = require("./addrequest");

app.use("/getnotifications", getNotifications);
app.use("/addrequest", addrequest);

module.exports = app;
