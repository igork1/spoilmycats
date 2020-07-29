const express = require('express');

const router = express.Router();

const users = require('./routes/users');
const auth = require('./routes/auth');
const cats = require('./routes/cats');

router.use('/v1/users', users);
router.use('/v1/auth', auth);
router.use('/v1/cats', cats);

module.exports = router;
