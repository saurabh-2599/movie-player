const Movie = require('./../Models/movieModel');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>
    {
        cb(null, 'Public/uploads');
    },
    filename: (req, file, cb) =>
    {
        const ext = file.mimetype.split('/')[1];
        cb(null, `movie-${ Date.now() }.${ ext }`);
    }
})
const upload = multer({
    storage
})
const uploadData = upload.fields([{ "name": "thumbnail", maxCount: 1 }, { "name": "video", maxCount: 1 }]);

const createNewMovie = async (req, res, next) =>
{
    
  
    try
    {

        const newMovie = await Movie.create({
            name: req.body.name,
            thumbnail: req.files.thumbnail[0].filename,
            video: req.files.video[0].filename
        })
        res.render("upload",{
            message:"Uploaded Successfully"
        });
    }
    catch(err){
        res.render("404","OOPS Something went Wrong");
    }


}
const getMovies = async (req, res, next) =>
{   try{
    const movies = await Movie.find();
    res.render("index",{movies});
     }
     catch(err){
         res.render("404","OOPS Something went Wrong");
     }

}
const getSingleMovie=async(req,res) => {
    try{
   const movie=await Movie.findById(req.params.id);
   res.render("movie",{movie});
    }
    catch(err){
        res.render("404","OOPS Something went Wrong");
    }
}
const home=async(req,res) => {
    res.render("index");
}
const uploadForm=async(req,res) =>{
    try{
    res.render("upload",{message:"Please upload files"});
    }
    catch(err){
        res.render("404","OOPS Something went Wrong");
    }
}
exports.createNewMovie = createNewMovie;
exports.getMovies = getMovies;
exports.uploadData = uploadData;
exports.home=home;
exports.uploadForm=uploadForm;
exports.getSingleMovie=getSingleMovie;