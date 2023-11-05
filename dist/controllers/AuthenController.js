"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenController {
    login(req, res, next) {
        res.render('authentication/auth-sign-in', { layout: false });
    }
    register(req, res, next) {
        res.render('authentication/auth-sign-up', { layout: false });
    }
    recover(req, res, next) {
        res.render('authentication/auth-recoverpw', { layout: false });
    }
}
exports.default = new AuthenController();
//# sourceMappingURL=AuthenController.js.map