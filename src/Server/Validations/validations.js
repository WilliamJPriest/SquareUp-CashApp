const Joi = require('joi');
const registerValidation =(data) =>{
    const joiSchema= joi.object({
        username: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()

    });
    return joiSchema.validate(data);
}

const loginValidation= (data) =>{
    const joiSchema= joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()

    });
}

module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;