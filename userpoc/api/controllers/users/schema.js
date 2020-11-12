/** Copyright (c) 2020 - Present, Wissen Technology**/
const Joi = require('joi');
module.exports = {

    addUserDetail: Joi.object().keys({
        firstName: Joi.string().required().min(1).max(50),
        lastName: Joi.string().required().min(1).max(250),
        telephoneNumber: Joi.number().required(),
        fullAddress: Joi.string().required().min(1).max(250),
        ssn: Joi.string().required().min(1).max(250),
    }),

    checkSSNAvailability: Joi.object().keys({
        ssn: Joi.string().required().min(1).max(50),
    })

}