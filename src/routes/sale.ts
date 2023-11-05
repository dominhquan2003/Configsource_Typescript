import express from 'express';
const router = express.Router();
import SaleController from '../controllers/SaleController';


router.get('/', SaleController.getListSale);
router.get('/add', SaleController.getAddSale);

export default router;