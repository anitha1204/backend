

const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController");

router.post('/user', createUser);
router.get('/users/:email', getUsers);

module.exports = router;
