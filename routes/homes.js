var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homes');


router.get('/', homeController.index);

module.exports = router;