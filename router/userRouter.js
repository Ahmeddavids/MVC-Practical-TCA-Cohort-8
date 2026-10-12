const express = require('express');

const router = express.Router();
const { getUsers, createUser } = require('../controller/user');

router.get('/allUsers', getUsers);

router.post('/createUser', createUser);

module.exports = router