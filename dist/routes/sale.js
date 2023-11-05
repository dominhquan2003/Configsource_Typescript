"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const SaleController = require('../controllers/SaleController.ts');
router.get('/', SaleController.getListSale);
router.get('/add', SaleController.getAddSale);
exports.default = router;
//# sourceMappingURL=sale.js.map