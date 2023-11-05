class SaleController {
    getListSale(req, res, next) {
        res.render('sale/page-list-sale');
    }
    getAddSale(req, res, next) {
        res.render('sale/page-add-sale');
    }
}
module.exports = new SaleController();
//# sourceMappingURL=SaleController.js.map