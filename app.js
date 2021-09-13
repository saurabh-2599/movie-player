const movieRouter = require('./Routes/movieRoute.js');
const express = require("express");
const morgan = require('morgan');
//creating a express server
const app = express();
//set view engine
app.set("view engine","ejs");
app.use(express.static("Public"))
//body parser middleware

app.use(express.json());
app.use(morgan('dev'));
app.use('/movie-player', movieRouter);
//if no route handler exist for route-unhandled routes
app.use((req,res,next) => {
    res.render("404",{message:"Error 404 Page Not found!!!!"});
})
module.exports = app;
