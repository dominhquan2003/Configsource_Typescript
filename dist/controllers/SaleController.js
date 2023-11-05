"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaleController {
    getListSale(req, res, next) {
        res.render('sale/page-list-sale');
    }
    getAddSale(req, res, next) {
        res.render('sale/page-add-sale');
    }
}
exports.default = new SaleController();
//# sourceMappingURL=SaleController.js.map