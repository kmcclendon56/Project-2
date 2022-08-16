var express = require('express');
var router = express.Router();
const journeyController = require("../controllers/journeys");
const isLoggedIn = require('../config/auth');



router.get('/:id', isLoggedIn, journeyController.show);
router.get('/', isLoggedIn, journeyController.showAll)



module.exports = router;