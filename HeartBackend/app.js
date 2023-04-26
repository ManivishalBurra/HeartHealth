const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const dburl = "mongodb+srv://manivishalbits:1ZCuzWHzwy9ekKvO@heart0.8byzbk0.mongodb.net/test";

  console.log(dburl)
  mongoose.connect(
    dburl,
    { useNewUrlParser: true, useUnifiedTopology: true },
  ).catch(err => console.log(err))
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);


const login = require("./routes/login/login.js");
app.use("/login", login);

const report = require("./routes/report/init");
app.use("/report", report);

const appointment = require("./routes/Appointment/init");
app.use("/appointment", appointment);


const home = require("./routes/Home/init");
app.use("/home", home);

const movies = require("./routes/Movies/init");
app.use("/movies", movies);

const private = require("./routes/Private/init");
app.use("/private", private);

const notifications = require("./routes/Notifications/init");
app.use("/notifications", notifications);

server.listen(process.env.PORT || 6303, () => {
  console.log("im using at port 6303");
});

console.log("server started");
