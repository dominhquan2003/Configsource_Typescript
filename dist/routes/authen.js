"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const AuthenController_1 = __importDefault(require("../controllers/AuthenController"));
router.get('/login', AuthenController_1.default.login);
// router.get('/register', authenController.register);
exports.default = router;
//# sourceMappingURL=authen.js.map