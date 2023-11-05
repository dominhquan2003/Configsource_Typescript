class ProductController {
    getListProducts(req, res, next) {
        res.render('products/page-list-product');
    }
    getAddProducts(req, res, next) {
        res.render('products/page-add-product');
    }
}
module.exports = new ProductController();
//# sourceMappingURL=ProductController.js.map