const app = require("express")();
const Notifications = require("../../models/Notifications");

app.post("/", async (req, res) => {
  Notifications.findOne(
    { useremail: req.body.requestemail },
    async (err, notifs) => {
      if (err) {
        console.log(err);
      } else {
        console.log(notifs);
        if (!notifs) {
          const notification = new Notifications({
            useremail: req.body.requestemail,
            requests: [
              {
                senderemail: req.body.senderemail,
                senderName: req.body.senderName,
                senderProfilePic: req.body.senderPic,
              },
            ],
            approvals: [],
          });
          notification.save();
          res.send(notification);
        } else {
          var found = false;
          notifs.requests.some((element) => {
            if (element.senderemail == req.body.senderemail) {
              found = true;
              return false;
            }
          });
          if (!found) {
            await Notifications.findOneAndUpdate(
              { useremail: req.body.requestemail },
              {
                $addToSet: {
                  requests: {
                    senderemail: req.body.senderemail,
                    senderName: req.body.senderName,
                    senderProfilePic: req.body.senderPic,
                  },
                },
              }
            );
          }
          res.send(notifs);
        }
      }
    }
  );
});

module.exports = app;
