import express from 'express';
const router = express.Router();
import homeController from '../controllers/HomeController';


router.get('/', homeController.index);

// module.exports = router;
export default router
