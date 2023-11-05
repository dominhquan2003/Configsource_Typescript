"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
router.get('/', ProfileController_1.default.getProfile);
exports.default = router;
//# sourceMappingURL=profile.js.map