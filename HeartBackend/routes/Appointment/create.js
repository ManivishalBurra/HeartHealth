const app = require("express")();
const Appointment = require("../../models/appointment");

app.post("/",(req,res)=>{

    const appointment = new Appointment({
        ...req.body
    })
    appointment.save();
    res.send("success");
  })
  
  module.exports = app;