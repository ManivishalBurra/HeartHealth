const app = require("express")();
const Appointment = require("../../models/appointment");

app.get("/",(req,res)=>{
    var id = req.query.id;
    Appointment.find({user_id: id},(err,data)=>{
        if(err){
            console.log(err);
            res.send(false);
          }
          else{
            res.send(data);
          }
    })
  })
  
  module.exports = app;