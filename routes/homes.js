var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homes');
const isLoggedIn = require('../config/auth');

router.get('/', homeController.index);

module.exports = router;