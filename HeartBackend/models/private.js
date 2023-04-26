const mongoose = require('mongoose');

const privateSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Private',privateSchema,"Private");