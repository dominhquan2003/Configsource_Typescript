"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'pos',
    synchronize: true,
    logging: true,
    entities: ["./entity/*"],
    subscribers: [],
    migrations: [],
});
dataSource.initialize()
    .then(() => {
    console.log('Successfully initialized database');
})
    .catch((error) => console.log(error));
// module.exports = {dataSource}
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map