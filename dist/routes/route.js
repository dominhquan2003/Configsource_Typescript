"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = __importDefault(require("./home"));
const authen_1 = __importDefault(require("./authen"));
const products_1 = __importDefault(require("./products"));
const users_1 = __importDefault(require("./users"));
const profile_1 = __importDefault(require("./profile"));
const category_1 = __importDefault(require("./category"));
const customer_1 = __importDefault(require("./customer"));
const sale_1 = __importDefault(require("./sale"));
function routes(app) {
    app.use('/', home_1.default);
    app.use('/authen', authen_1.default);
    app.use('/products', products_1.default);
    app.use('/categories', category_1.default);
    app.use('/users', users_1.default);
    app.use('/profile', profile_1.default);
    app.use('/customers', customer_1.default);
    app.use('/sale', sale_1.default);
}
exports.default = routes;
//# sourceMappingURL=route.js.map