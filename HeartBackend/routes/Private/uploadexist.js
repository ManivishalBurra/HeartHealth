const app = require("express")();
const Private = require("../../models/private")

app.post("/",(req,res)=>{
    console.log(req.body);
    Private.findOneAndUpdate({movieID:req.body.movieID},{$push :{movieUrl:req.body.url,episode:req.body.episode}}
        
        ,{new: true, upsert: true },(err,data)=>{if(!err)res.send(true)})
})


module.exports = app;