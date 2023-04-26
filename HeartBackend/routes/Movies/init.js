const app = require("express")();

const movieslist = require("./movieslist");

app.use("/movieslist",movieslist);



module.exports = app;