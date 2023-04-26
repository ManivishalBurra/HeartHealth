const app = require("express")();

const create = require("./create");
const get = require("./get");

app.use("/create", create);
app.use("/fetch", get);

module.exports = app;
