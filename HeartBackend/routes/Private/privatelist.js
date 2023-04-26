const app = require("express")();
const Private = require("../../models/private")

app.get("/",(req,res)=>{
    Private.find({},(err,data)=>{
        if(err){
            res.send(false)
        }
        else{
            res.send(data)
        }
    })
})


module.exports = app;