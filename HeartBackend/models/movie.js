const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName:String,
    banner:String,
    movieUrl:[String],
    ratings:String,
    genres:[String],
    plotOutline:String,
    year:String,
    movieID:String,
    poster:String,
    episode:[String]
    });

module.exports = mongoose.model('Movie',movieSchema,"Movie")