"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
router.get('/', CategoryController_1.default.getListCategories);
router.get('/add', CategoryController_1.default.getAddCategories);
exports.default = router;
//# sourceMappingURL=category.js.map