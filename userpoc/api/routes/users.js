var express = require('express');
var router = express.Router();

const userController = require('../controllers/users/users');
const userSchema = require('../controllers/users/schema');
const acronym = require('../config/acronyms');

const { wrapControllerFunction, validate} = require('../middlewares')

router.get('/',           wrapControllerFunction(userController.getAllUsers.bind(userController)));
router.post('/add',       validate(userSchema.addUserDetail), wrapControllerFunction(userController.addUserDetail.bind(userController)));
router.get('/check/:ssn', validate(userSchema.checkSSNAvailability, acronym.requestProperty.PARAMS), wrapControllerFunction(userController.checkSSNAvailability.bind(userController)));

module.exports = router;