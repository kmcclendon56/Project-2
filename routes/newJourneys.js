var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homes');
const isLoggedIn = require('../config/auth');
const home = require('../models/home');


router.post('/newjourneys', isLoggedIn, homeController.create);

module.exports = router;