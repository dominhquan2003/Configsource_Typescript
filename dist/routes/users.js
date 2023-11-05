"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UserController_1 = __importDefault(require("../controllers/UserController"));
router.get('/', UserController_1.default.getListUsers);
router.get('/add', UserController_1.default.getAddUsers);
router.get('/edit', UserController_1.default.getEditUsers);
router.get('/profile', UserController_1.default.getProfileUsers);
exports.default = router;
//# sourceMappingURL=users.js.map