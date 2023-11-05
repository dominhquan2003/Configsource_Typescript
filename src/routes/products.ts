const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController.ts');


router.get('/', ProductController.getListProducts);
router.get('/add', ProductController.getAddProducts);
router.post('/add', ProductController.getAddProducts);

export default router;
