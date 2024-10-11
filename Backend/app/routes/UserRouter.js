const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')
const { authMiddleware, authUserMiddleware } = require('../middlewares/authMiddleware')

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.put('/update-user', userController.updateUser)
router.delete('/delete-user', authMiddleware, userController.deleteUser)
router.get('/getall', authMiddleware, userController.getallUser)
router.get('/get-detail/:id', authUserMiddleware, userController.getdetailUser)
router.get('/refresh-token', userController.refresh_token)


module.exports = router