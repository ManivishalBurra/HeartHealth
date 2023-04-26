const app = require("express")();

const report = require("./report");
const getReport = require("./getreport");

app.use("/create", report);
app.use("/fetch", getReport);

module.exports = app;
