const app = require("express")();
const User = require("../../models/user")

app.post("/",(req,res)=>{
  
  User.findOne({email:req.body.email},(err,userfun)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      if(!userfun){
        const user = new User({
          username:req.body.name,
          email:req.body.email,
          profilepic:req.body.imageUrl,
        });
        user.save();
        res.send(user);
      }
      else{
        res.send(userfun);  
      }
    }
  })
    
})

module.exports = app;