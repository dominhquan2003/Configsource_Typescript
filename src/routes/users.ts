import express from 'express';
const router = express.Router();
import UserController from '../controllers/UserController';


router.get('/', UserController.getListUsers);
router.get('/add', UserController.getAddUsers);
router.get('/edit', UserController.getEditUsers);
router.get('/profile', UserController.getProfileUsers);

export default router;
