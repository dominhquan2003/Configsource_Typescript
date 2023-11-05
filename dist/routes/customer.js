"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CustomerController_1 = __importDefault(require("../controllers/CustomerController"));
router.get('/', CustomerController_1.default.getListCustomer);
router.get('/add', CustomerController_1.default.getAddCustomer);
exports.default = router;
//# sourceMappingURL=customer.js.map