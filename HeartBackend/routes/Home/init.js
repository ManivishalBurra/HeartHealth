const app = require("express")();

const room = require("./room");
const getinfobyroomid = require("./getinfobyroomid");
const getinfo = require("./getinfo");
const addfriend = require("./addfriend");
const getusers = require("./getusers");

app.use("/roomstream", room);
app.use("/getinfo", getinfo);
app.use("/getinfobyroomid", getinfobyroomid);
app.use("/addfriend", addfriend);
app.use("/getusers", getusers);
module.exports = app;
