const app = require("express")();
const User = require("../../models/user")
const mongoose = require("mongoose");
app.get("/", (req,res)=>{
  
    var id = mongoose.Types.ObjectId(req.query.id);
    console.log(id);
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