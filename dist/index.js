"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const route_1 = __importDefault(require("./routes/route"));
require('reflect-metadata');
const app = (0, express_1.default)();
const port = 8000;
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.engine("hbs", express_handlebars_1.default.engine({
    defaultLayout: "main",
    extname: "hbs",
    helpers: {
        sum: (a, b) => a + b,
    },
}));
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "resources", "views"));
(0, route_1.default)(app);
app.use((req, res, next) => {
    res.render('error/pages-error', { layout: false });
});
//127.0.0.1 -localhost
app.listen(port, () => {
    console.log(` App listening on port http://localhost:` + `${port}`);
});
//# sourceMappingURL=index.js.map