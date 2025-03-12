const mongoose = require('mongoose');
const Joi = require('joi')

const User = mongoose.model('User',
  new mongoose.Schema({
    name:{
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email:{
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 255
    },
    password:{
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024
    }
  })
)

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(1024).required()
  });
  return schema.validate(user);
}

exports.User = User;

exports.validate = validateUser;