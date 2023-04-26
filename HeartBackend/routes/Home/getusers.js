const app = require("express")();
const User = require("../../models/user");

app.get("/", async (req, res) => {
  await User.find({}, (err, data) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else {
      // var arr = [];
      // data.forEach((element) => {
      //   arr.push({
      //     username: element.username,
      //     email: element.email,
      //     profilepic: element.friends.profilepic,
      //   });
      // });
      res.send(data);
    }
  });
});

module.exports = app;
