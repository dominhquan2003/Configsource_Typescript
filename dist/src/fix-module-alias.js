"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const moduleAlias = require('module-alias');
const module_alias_1 = require("module-alias");
let folder = '';
if (process.env.NODE_ENV == 'production') {
    folder = 'dist';
}
else {
    folder = 'src';
}
module_alias_1.default.addAliases({
    '@controller': __dirname + '/' + folder + '/controller',
    '@entity': __dirname + '/' + folder + '/entity'
});
//# sourceMappingURL=fix-module-alias.js.map