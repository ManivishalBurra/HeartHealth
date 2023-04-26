const app = require("express")();
const Private = require("../../models/private")
const Movie = require("../../models/movie")
app.post("/",(req,res)=>{
  console.log(req.body.genres);
    const movie = new Movie({
        movieName:req.body.movieName,
        banner:req.body.banner,
        movieUrl:[req.body.url],
        ratings:req.body.ratings,
        genres:req.body.genres,
        movieID:req.body.movieID,
        plotOutline:req.body.plotOutline,
        year:req.body.year,
        poster:req.body.image,
        episode:[req.body.movieName]
      });
      movie.save();
   res.send(true)
})


module.exports = app;