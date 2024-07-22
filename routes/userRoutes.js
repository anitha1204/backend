
// const express = require('express');
// const router = express.Router();
// const { postUserData, getUserData } = require('../controllers/userController');

// router.post('/post', postUserData);
// router.get('/get/:email', getUserData);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController");

router.post('/post', createUser);
router.get('/get/:email', getUsers); 

module.exports = router;
