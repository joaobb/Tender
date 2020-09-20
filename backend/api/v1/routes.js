const express = require('express');

// Routes
const index = require('./index');
const auth = require('./auth');
const account = require('./account');
const recipes = require('./recipes');

const router = express.Router();

// Endpoints
router.use('/', index);
router.use('/recipes', recipes);
router.use('/auth', auth);
router.use('/account', account);

module.exports = router;
