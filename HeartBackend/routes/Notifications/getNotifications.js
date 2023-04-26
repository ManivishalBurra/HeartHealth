const app = require("express")();
const Notifications = require("../../models/Notifications");

app.post("/", async (req, res) => {
  await Notifications.find({ useremail: req.body.useremail }, (err, data) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;
