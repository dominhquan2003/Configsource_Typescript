import express from 'express';
const router = express.Router();
import CategoryController from '../controllers/CategoryController';


router.get('/', CategoryController.getListCategories);
router.get('/add', CategoryController.getAddCategories);

export default router;