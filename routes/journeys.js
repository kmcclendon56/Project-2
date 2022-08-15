var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homes');
const isLoggedIn = require('../config/auth');
const journeyController = require("../controllers/journeys");


router.get('/journeys', isLoggedIn, journeyController.new)
router.post('/journeys', isLoggedIn, journeyController.create);
// router.get('/home/:id', homeController.show);
router.get('/journeys/:id', isLoggedIn, journeyController.show);

module.exports = router;