/** Copyright (c) 2019 - Present, Wissen Technology**/
'use strict';

const lang   = require('../../config/lang');
const acronym   = require('../../config/acronyms');
const crypto = require('../../security/crypto');

const User = require('../../models/users');


const users = {

    /**
     * add a user
     * @param {Obj} req 
     */
    async addUserDetail(req) {
        try {
            const { firstName, lastName, telephoneNumber, fullAddress, ssn } = req.body;
            const user = new User({ firstName, lastName, telephoneNumber, fullAddress, ssn });
    
            await user.save();
    
            return {
                success: true,
                responseStatus: acronym.responseStatus.SUCCESS,
                message: lang.success.userCreated
            }
        }  catch(err) {
            global.CONSOLE(err)
            return {
                success: false,
                responseStatus: acronym.responseStatus.INTERNALSERVERERROR,
                errorType: acronym.errorType.SERVERERROR,
                errorMessage: acronym.errorMessage.SERVERERRORMESSAGE,
                errorsArray: []
            }
        }
    },

    /**
     * Get all users
     * @param {Obj} req 
     */
    async getAllUsers(req) {
        try {
            const users = await User.find().exec();
        
            return {
                success: true,
                responseStatus: acronym.responseStatus.SUCCESS,
                data: {
                    users
                }
            }

        }  catch(err) {
            global.CONSOLE(err)
            return {
                success: false,
                responseStatus: acronym.responseStatus.INTERNALSERVERERROR,
                errorType: acronym.errorType.SERVERERROR,
                errorMessage: acronym.errorMessage.SERVERERRORMESSAGE,
                errorsArray: []
            }
        }
    },

    /**
     * Check SSN availability
     * @param {Object} req 
     */
    async checkSSNAvailability(req) {
        try {
            const { ssn } = req.params;
            const userCondition = {
                ssn
            }
            
            const user = await User.findOne(userCondition).exec();
    
            if(user) {
                return {
                    success: true,
                    responseStatus: acronym.responseStatus.SUCCESS,
                    data: {
                        exist: true
                    }
                }
            }
            return {
                success: true,
                responseStatus: acronym.responseStatus.SUCCESS,
                data: {
                    exist: false
                }
            }
        }  catch(err) {
            global.CONSOLE(err)
            return {
                success: false,
                responseStatus: acronym.responseStatus.INTERNALSERVERERROR,
                errorType: acronym.errorType.SERVERERROR,
                errorMessage: acronym.errorMessage.SERVERERRORMESSAGE,
                errorsArray: []
            }
        }
    }
}

module.exports = users;