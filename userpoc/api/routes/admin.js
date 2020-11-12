var express = require('express');
var router = express.Router();

const adminController = require('../controllers/admin/admin');
const adminSchema = require('../controllers/admin/schema');

const { wrapControllerFunction, validate} = require('../middlewares')

router.post('/login', validate(adminSchema.login), wrapControllerFunction(adminController.login.bind(adminController)));

module.exports = router;
