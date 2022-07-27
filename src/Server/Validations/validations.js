const Joi = require('joi');

const registerValidation =(data) =>{
    const joiSchema= Joi.object({
        username: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        address: Joi.string().min(6).required(),
        country: Joi.string().min(6).required(),
        fullname: Joi.string().min(6).required(),

    });
    return joiSchema.validate(data);
}

const loginValidation= (data) =>{
    const joiSchema= Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()

    });
    return joiSchema.validate(data);
}

const receiptValidations= (data)=>{
    const joiSchema= Joi.object({
        username: Joi.string().min(6).required(),
        currency: Joi.string().required(),
        products: Joi.string().min(6).required()

    });
    return joiSchema.validate(data)
}
module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;
module.exports.receiptValidations=receiptValidations;