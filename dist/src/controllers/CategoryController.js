var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { dataSource } = require('../../data-source.ts');
const Category = require('../entity/Category.ts');
class CategoryController {
    getListCategories(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryRepository = dataSource.getRepository(Category);
            const allPhotos = yield categoryRepository.find();
            res.render('categories/page-list-category', allPhotos);
        });
    }
    getAddCategories(req, res, next) {
        res.render('categories/page-add-category');
    }
}
module.exports = new CategoryController();
//# sourceMappingURL=CategoryController.js.map