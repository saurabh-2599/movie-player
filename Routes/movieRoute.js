const movieController = require('./../Controllers/movieController');
const express = require('express');
const router = express.Router();
;

router.route('/').post(movieController.uploadData, movieController.createNewMovie).get(movieController.getMovies);
router.get('/upload',movieController.uploadForm);
router.get('/:id',movieController.getSingleMovie);
module.exports = router;