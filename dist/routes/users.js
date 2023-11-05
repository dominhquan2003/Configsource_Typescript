"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.ts');
router.get('/', UserController.getListUsers);
router.get('/add', UserController.getAddUsers);
router.get('/edit', UserController.getEditUsers);
router.get('/profile', UserController.getProfileUsers);
exports.default = router;
//# sourceMappingURL=users.js.map