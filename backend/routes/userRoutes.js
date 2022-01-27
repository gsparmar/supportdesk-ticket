const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// using controller for the req and res
router.post('/', registerUser);
router.post('/login', loginUser);

module.exports = router;
