var express = require('express');
var router = express.Router();
var userController = require('./user');

router.post('/saveFile', userController.saveFile);
router.get('/getResponse', userController.getResponse);

module.exports = router;