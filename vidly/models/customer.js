const mongoose=require('mongoose');
const Joi = require('joi')

const Customer = mongoose.model('Customer', 
  new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
    phone: { type: String, required: true, minlength: 1, maxlength: 20 },
    isGold: { type: Boolean, default: false }
    
  })
)

function validateCustomer(customer) {
  const schema =Joi.object({
      name: Joi.string().min(3).required(),
      phone: Joi.string().min(1).max(20).required(),
      isGold: Joi.boolean()
    });
  
    return schema.validate(customer);
}

exports.Customer = Customer;

exports.validate = validateCustomer;