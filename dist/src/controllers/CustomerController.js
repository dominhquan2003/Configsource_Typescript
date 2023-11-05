class CustomerController {
    getListCustomer(req, res, next) {
        res.render('customer/page-list-customers');
    }
    getAddCustomer(req, res, next) {
        res.render('customer/page-add-customers');
    }
}
module.exports = new CustomerController();
//# sourceMappingURL=CustomerController.js.map