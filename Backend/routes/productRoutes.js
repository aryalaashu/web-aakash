const router = require('express').Router();
const productController = require("../controllers/productcontrollers");
const {authGuardAdmin} = require('../middleware/authGuard');

// Create product API
router.post('/create_product',authGuardAdmin, productController.createProduct)

// Get all products API
router.get("/get_products", productController.getAllProducts)

// get single product api
router.get("/get_products/:id", productController.getSingleProduct)

// update product api
router.put("/update_product/:id", authGuardAdmin,productController.updateProduct)

// delete product api
router.delete("/delete_product/:id",authGuardAdmin, productController.deleteProduct)





module.exports = router;