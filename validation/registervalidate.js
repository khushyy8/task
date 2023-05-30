const Joi = require('joi');
const registervalidate = Joi.object({
    fname: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z]+$/))
    .required(),

email: Joi.string()
    .pattern(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
    .required(),
    

password: Joi.string()
.required(),



gender: Joi.string()
.required(),

role: Joi.string()
.required(),

 })
module.exports = registervalidate;