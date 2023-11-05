"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController.ts');
router.get('/', ProductController.getListProducts);
router.get('/add', ProductController.getAddProducts);
router.post('/add', ProductController.getAddProducts);
exports.default = router;
//# sourceMappingURL=products.js.map