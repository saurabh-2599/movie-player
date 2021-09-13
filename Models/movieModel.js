const mongoose = require('mongoose');
//creating schema
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    thumbnail: {
        type: String,
        default: "default.jpeg"
    },
    video: {
        type: String,
        required: true
    }
})
//creating model out of schema
const Movie = new mongoose.model("Movie", movieSchema);
//exporting model
module.exports = Movie;