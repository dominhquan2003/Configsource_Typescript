const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController.ts');


router.get('/', ProfileController.getProfile);

export default router;
