"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController.ts');
router.get('/', CustomerController.getListCustomer);
router.get('/add', CustomerController.getAddCustomer);
exports.default = router;
//# sourceMappingURL=customer.js.map