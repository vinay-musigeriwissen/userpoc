/** Copyright (c) 2020 - Present, Wissen Technology**/
const Joi = require('joi');
module.exports = {

    login: Joi.object().keys({
        username: Joi.string().required().min(1).max(50),
        password: Joi.string().required().min(1).max(250),
    }),
}