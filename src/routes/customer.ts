import express from 'express';
const router = express.Router();
import CustomerController from '../controllers/CustomerController';


router.get('/', CustomerController.getListCustomer);
router.get('/add', CustomerController.getAddCustomer);

export default router;