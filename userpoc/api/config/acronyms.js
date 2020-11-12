/** Copyright (c) 2019 - Present, Wissen Technology**/
/** Name the last child in CAPS to represent it as ENUM */
module.exports = {

    requestProperty: {
      BODY: 'body',
      QUERY: 'query',
      PARAMS: 'params'
    },
  
    responseCode: {
      FAILED: 'failed',
      SUCCESS: 'success'
    },
  
    responseStatus: {
      SUCCESS: 200,
      CREATED: 201,
      UPDATEDORNOCONTENT: 204,
      BADREQUEST: 400,
      VALIDATIONERROR: 422,
      UNAUTHORIZED: 401,
      UNAUTHENTICATED: 403,
      NOTFOUND: 404,
      CONFLICT: 409,
      INTERNALSERVERERROR: 500,
      ACCESSDENIED: 700, 
    },
  
    errorType: {
      VALIDATIONERROR: 'Validation Error',
      SERVERERROR: 'Server Error',
      BADREQUEST: 'Bad Request',
      UNAUTHORIZED: 'Access denied'
    },
  
    errorMessage: {
      VALIDATIONERRORMESSAGE: 'One or more values passed is incorrect or missing',
      SERVERERRORMESSAGE: 'Server encountered an internal error, please try again',
      BADREQUESTMESSAGE: 'Invalid Request',
      MOVEINDATE: 'Move-in date can\'t be less than 2 weeks from current date',
      UNAUTHORIZEDMESSAGE: 'Access is denied. You may not have the appropriate permissions to access the resource.'
    }
  }