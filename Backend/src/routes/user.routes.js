const express = require('express');
const userController = require('../controllers/user.controller');
const router =  express.Router();
const jwtMdw = require('../middlewares/authMiddleware');

router.get("/users", jwtMdw, userController.getAllUsersPaginated);
router.get("/allUsers", jwtMdw, userController.getAllUsers);

module.exports = router;