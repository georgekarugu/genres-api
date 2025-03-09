const Joi = require('joi');
const mongoose = require('mongoose')


const Rental = mongoose.model('Rental', new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
      isGold:{
        type: Boolean,
        default: false
      },
      phone:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
      }
    }),
    required: true
  },

  movie: {
    type: new mongoose.Schema({
      title:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      },
      dailyRentalRate:{
        type: Number,
        required: true,
        min: 0,
        max: 100
      }
    }),
    required: true
  },
  dateOut:{
    type: Date,
    default: Date.now,
    required: true
  },
  dateReturned:{
    type: Date
  },
  rentalFee:{
    type: Number,
    min: 0
  }
}));

function validateRental(rental) {
  const schema=Joi.object({
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required()
  });
  return schema.validate(rental);
}

exports.Rental = Rental;
exports.validate = validateRental;