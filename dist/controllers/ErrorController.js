"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorController {
    getError404(req, res) {
        res.render('error/pages-error', { layout: false });
    }
    getError500(req, res) {
        res.render('error/pages-error-500', { layout: false });
    }
}
exports.default = new ErrorController();
//# sourceMappingURL=ErrorController.js.map