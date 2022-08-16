const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogs');
const isLoggedIn = require('../config/auth');

router.post('/blogs/:id', isLoggedIn, blogController.edit);
router.delete('/blogs/:id', isLoggedIn, blogController.delete);
router.post('/journeys/:id/blogs', isLoggedIn, blogController.create);


module.exports = router;