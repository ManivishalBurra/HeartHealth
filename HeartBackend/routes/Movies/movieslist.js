const app = require("express")();
const User = require("../../models/user")
const Movie = require("../../models/movie")

app.get("/",(req,res)=>{
    Movie.find({},(err,data)=>{
        if(err){
            res.send(false)
        }
        else{
            res.send(data)
        }
    })
})


module.exports = app;