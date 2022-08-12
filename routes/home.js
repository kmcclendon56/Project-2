var express = require('express');
var router = express.Router();
const homeController = require('../controllers/home');
const isLoggedIn = require('../config/auth');

