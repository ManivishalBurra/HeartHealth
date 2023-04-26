const app = require("express")();
const User = require("../../models/user")
const mongoose = require("mongoose");
app.get("/", (req,res)=>{
  
    var id = req.query.id;
    User.find({_id:id},(err,data)=>{
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