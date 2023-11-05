class UserController {
    getListUsers(req, res, next) {
        res.render('users/page-list-users');
    }
    getAddUsers(req, res, next) {
        res.render('users/page-add-users');
    }
    getEditUsers(req, res, next) {
        res.render('users/page-edit-users');
    }
    getProfileUsers(req, res, next) {
        res.render('users/user-profile');
    }
}
module.exports = new UserController();
//# sourceMappingURL=UserController.js.map