import express from 'express';
const router = express.Router();
import ProductController from '../controllers/ProductController';


router.get('/', ProductController.getListProducts);
router.get('/add', ProductController.getAddProducts);
router.post('/add', ProductController.getAddProducts);

export default router;
