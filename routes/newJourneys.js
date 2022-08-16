var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homes');
const isLoggedIn = require('../config/auth');
const newJourneyController = require("../controllers/newJourneys");


router.get('/newJourneys', isLoggedIn, newJourneyController.new)
router.post('/newJourneys', isLoggedIn, newJourneyController.create);

module.exports = router;