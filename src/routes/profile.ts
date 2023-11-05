import express from 'express';
const router = express.Router();
import ProfileController from '../controllers/ProfileController';


router.get('/', ProfileController.getProfile);

export default router;
