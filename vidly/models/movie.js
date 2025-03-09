const mongoose = require('mongoose');
const joi = require('joi');
const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movie', new mongoose.Schema({

  title: { 
    type: String, 
    required: true, 
    trim: true, 
    minlength: 5, 
    maxlength: 255 },

  genre:{
    type: genreSchema,
    required: true  // a movie must have a genre.  The genreSchema is defined in genre.js
  },

  numberInStock: { 
    type: Number, 
    required: true, 
    min: 0 },

  dailyRentalRate: { 
    type: Number, 
    required: true, 
    min: 0 }
}));

function validateMovie(movie) {
  const schema = joi.object({
    title: joi.string().min(5).max(255).required(),
    genreId: joi.objectId().required(),
    numberInStock: joi.number().min(0).required(),
    dailyRentalRate: joi.number().min(0).required()
  });
  return schema.validate(movie);
}

exports.Movie = Movie;

exports.validate = validateMovie;
