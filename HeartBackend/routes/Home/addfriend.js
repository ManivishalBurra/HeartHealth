const app = require("express")();
const User = require("../../models/user")

app.post("/",async (req,res)=>{

    var username="";
    User.find({id:req.body.id},
         async (err,data)=>{
            if(err){
                console.log(err);
                res.send(false);
              }
              else{
                username= data[0].username;
                await User.findOneAndUpdate({roomId:req.body.roomId},{$addToSet:{friends:username}});
                res.send(true)
              }
        })
  })
  
  module.exports = app;