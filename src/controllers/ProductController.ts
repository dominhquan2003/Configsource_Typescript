class ProductController {
      getListProducts(req, res, next) {
            res.render('products/page-list-product') ;
      }
      getAddProducts(req, res, next) {
            res.render('products/page-add-product') ;
      }
}



export default new ProductController() 