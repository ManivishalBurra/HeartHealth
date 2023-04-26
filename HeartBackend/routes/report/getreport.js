const app = require("express")();
const Report = require("../../models/report")

app.get("/",(req,res)=>{
  var id = req.query.id;
  Report.find({user_id: id},(err,data)=>{
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