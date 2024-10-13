const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController')
const { authMiddleware } = require('../middlewares/authMiddleware')

router.post('/create-product', productController.createProduct)
router.put('/update-product/:id', authMiddleware, productController.updateProduct)
router.post('/details/:id', productController.getdetailProduct)

module.exports = router