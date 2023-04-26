const app = require("express")();
const User = require("../../models/user")

app.post("/",(req,res)=>{
    console.log(req.body);
    User.find({roomId:req.body.roomid},(err,data)=>{
            if(err){
                console.log(err);
                res.send(false);
              }
              else{
                if(!data)res.send(false);
                else res.send(data);
              }
        })
      
  })

module.exports = app;