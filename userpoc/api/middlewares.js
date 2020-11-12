/** Copyright (c) 2020 - Present, Wissen Technology**/
const jwt = require('jsonwebtoken');
const acronym = require('./config/acronyms');
const lang = require('./config/lang');
const { jwtKey } = require('./config/config');
const Admin = require('./models/admins')

/**
 * TO check the authorized access to the routes
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
function authenticate(req, res, next) {
  try {

    let { authorization: token = '' } = req.headers;

    if(req.method === "OPTIONS"){
      return res.status(200).json({});
    }

    const allowedRoutesWithoutAdmin = [
      'api/users/add',
      'api/admin/login'
    ];

    const match = allowedRoutesWithoutAdmin.findIndex(item => req.baseUrl.includes(item));

    if (match != -1) {
      return next()
    }

    [, token] = token.split(' ');
    jwt.verify(token, jwtKey, async (error, decoded) => {
      if (error) {
        return res.status(200).json({ response_code: acronym.responseCode.FAILED, msg: lang.error.tokenInvalidError, error });
      }
      const [ id, username ] = decoded.split('-');

      const userCondition = {
        _id: id, username
      }
      
      const user = await Admin.findOne(userCondition);
      
      if (!user) {
        return res.status(200).json({ response_code: acronym.responseCode.FAILED, msg: lang.error.userNotExistError })
      }

      if (user.status != 1) {
        return res.status(200).json({ response_code: acronym.responseCode.FAILED, msg: lang.error.accountBlockedError })
      };

      return next();

    });

  } catch (err) {
    global.CONSOLE(err)
    return res.status(200).json({ response_code: acronym.responseCode.FAILED, msg: lang.error.tokenInvalidError, error: err });
  }
}

/**
 * Response handler middleware
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
const wrapControllerFunction = (callback) => async function(req, res) {
    function sendResponse({ success = true, responseStatus = acronym.responseStatus.SUCCESS, message = '', errorType = null, errorMessage = null, errorsArray = [], data = {} }) {
        res.status(responseStatus).json({
            success,
            message,
            error: success ? {} : {
                Type: errorType,
                message: errorMessage,
                errors: errorsArray
            },
            data
        });
    }

    try {
        const responseObj = await callback(req, res);
        sendResponse(responseObj);
    } catch(err) {
        global.CONSOLE(err)
        const responseObj = {
            success: false,
            responseStatus: acronym.responseStatus.INTERNALSERVERERROR,
            errorType: acronym.errorType.SERVERERROR,
            errorMessage: acronym.errorMessage.SERVERERRORMESSAGE,
            errorsArray: []
        }
        sendResponse(responseObj);
    }   
};

/**
 * TO validate the post or params object from request with Joi
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
const validate = (schema, property = acronym.requestProperty.BODY) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);
    if (!error) { next(); }
    else {
      const { details } = error;
      const message = details.map(i => i.message).join(',')

      res.status(acronym.responseStatus.VALIDATIONERROR).json({
        success: false,
        error: {
          Type: acronym.errorType.VALIDATIONERROR,
          message,
          errors: details
        },
        data: {}
      });
    }
  }
}

module.exports = {
  authenticate, wrapControllerFunction, validate
}