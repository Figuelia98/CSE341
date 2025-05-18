const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();

router.get('/', indexController.getData);
module.exports = router;