const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {authMiddleware, authUserMiddleware} = require('../middleware/authMiddleware')

// POST route to create a new user
router.post('/singup', userController.createUser)   
router.post('/singin', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id',authMiddleware,  userController.deleteUser)
router.get('/getAll',  userController.getAllUser)
router.get('/get-details/:id',authUserMiddleware, userController.getDetailsUser)
router.post('/refresh-token', userController.refreshToken)


module.exports = router;
