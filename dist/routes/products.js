"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
router.get('/', ProductController_1.default.getListProducts);
router.get('/add', ProductController_1.default.getAddProducts);
router.post('/add', ProductController_1.default.getAddProducts);
exports.default = router;
//# sourceMappingURL=products.js.map