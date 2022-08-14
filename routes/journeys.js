var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homes');
const isLoggedIn = require('../config/auth');
const home = require('../models/home');


router.post('/journeys', isLoggedIn, homeController.create);
router.get('/:id', homeController.show);

module.exports = router;