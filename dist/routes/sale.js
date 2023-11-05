"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const SaleController_1 = __importDefault(require("../controllers/SaleController"));
router.get('/', SaleController_1.default.getListSale);
router.get('/add', SaleController_1.default.getAddSale);
exports.default = router;
//# sourceMappingURL=sale.js.map