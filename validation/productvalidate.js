const Joi = require('joi');
const productvalidate = Joi.object({
    pname: Joi.string()
    .pattern(new RegExp(/^[a-z A-Z]+$/))
    .min(3)
    .max(30)
    .required(),

description: Joi.string()
.required(),


size: Joi.string()
.required(),


price: Joi.number()
.required()


 })
module.exports = productvalidate;