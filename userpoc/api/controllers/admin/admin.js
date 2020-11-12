'use strict';

const jwt = require('jsonwebtoken');
const acronym = require('../../config/acronyms')
const lang   = require('../../config/lang');
const { jwtKey } = require('../../config/config');
const Admin = require('../../models/admins');

const admin = {
    
    /**
     * admin login
     * @param {Object} req 
     */
    async login(req) {
        try {
            const { username, password } = req.body;
    
            const usernameCondition = { username };
            const adminUser = await Admin.findOne(usernameCondition).exec();
            if(adminUser) {
                if(adminUser.password === password) {
                    const { _id: id, username } = adminUser;
                    
                    const authToken = jwt.sign(`${ id }-${ username }`, `${ jwtKey }`);
                    
                    adminUser._doc.authToken = authToken;
                    delete adminUser._doc.password;

                    return {
                        success: true,
                        responseStatus: acronym.responseStatus.SUCCESS,
                        message: lang.success.userLoggedIn,
                        data: {
                            user: adminUser
                        }
                    }
                }
                return {
                    success: false,
                    responseStatus: acronym.responseStatus.UNAUTHORIZED,
                    message: lang.error.worngPassword,
                }
            } 
            return {
                success: false,
                responseStatus: acronym.responseStatus.UNAUTHORIZED,
                message: lang.error.worngUsername,
            }
            
        } catch(err) {
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

module.exports = admin;