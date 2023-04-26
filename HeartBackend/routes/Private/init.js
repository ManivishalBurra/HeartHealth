const app = require("express")();

const privatelist = require("./privatelist");
const upload=require("./upload");
const uploadexist=require("./uploadexist");

app.use("/privatelist",privatelist);
app.use("/upload",upload);
app.use("/uploadexist",uploadexist);


module.exports = app;