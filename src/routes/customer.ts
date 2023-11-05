const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');


router.get('/', CustomerController.getListCustomer);
router.get('/add', CustomerController.getAddCustomer);

export default router;