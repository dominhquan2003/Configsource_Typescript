import dataSource from "../data-source";
import Category from '../entity/Category' ; 
class CategoryController {
      async getListCategories(req, res, next) {
            
            // const categoryRepository = getManager().getRepository(Category)
            // const allPhotos = await categoryRepository.find()
            res.render('categories/page-list-category') ;
      }
      getAddCategories(req, res, next) {
            res.render('categories/page-add-category') ;
      }
}


export default new CategoryController() 