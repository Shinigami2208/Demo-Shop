var express = require('express');
var router = express.Router();
var controller = require('../../controllers/users/user.controller');

router.get('/', controller.listUser);

module.exports = router;