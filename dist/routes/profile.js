"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');
router.get('/', ProfileController.getProfile);
exports.default = router;
//# sourceMappingURL=profile.js.map