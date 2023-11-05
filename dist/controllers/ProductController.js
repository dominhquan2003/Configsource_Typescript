"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    getListProducts(req, res, next) {
        res.render('products/page-list-product');
    }
    getAddProducts(req, res, next) {
        res.render('products/page-add-product');
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map