"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController.ts');
router.get('/', homeController.index);
// module.exports = router;
exports.default = router;
//# sourceMappingURL=home.js.map