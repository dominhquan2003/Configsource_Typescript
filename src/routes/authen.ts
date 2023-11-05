import express from 'express';
const router = express.Router();
import authenController from '../controllers/AuthenController';


router.get('/login', authenController.login);
// router.get('/register', authenController.register);



export default router
