import HomeRouter from './home'
import AuthRouter from './authen'
import ProductRouter from './products'
import UserRouter from './users'
import ProfileRouter from './profile'
import CategoryRouter from './category'
import CustomerRouter from './customer'
import SaleRouter  from './sale'


function routes(app) {
  app.use('/', HomeRouter);

  app.use('/authen', AuthRouter);

  app.use('/products', ProductRouter);

  app.use('/categories', CategoryRouter);

  app.use('/users', UserRouter);

  app.use('/profile', ProfileRouter);
  
  app.use('/customers', CustomerRouter);

  app.use('/sale', SaleRouter);

}
export default routes


