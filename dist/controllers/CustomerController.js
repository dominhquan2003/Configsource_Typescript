"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerController {
    getListCustomer(req, res, next) {
        res.render('customer/page-list-customers');
    }
    getAddCustomer(req, res, next) {
        res.render('customer/page-add-customers');
    }
}
exports.default = new CustomerController();
//# sourceMappingURL=CustomerController.js.map