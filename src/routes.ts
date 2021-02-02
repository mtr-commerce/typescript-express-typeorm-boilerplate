import { Router } from 'express';
import usersRouter from './controllers/usersController';
import ordersRouter from './controllers/ordersController';
import pricesRouter from './controllers/pricesController';
import * as welcomeController from './controllers/welcomeController';
import signupRouter from './controllers/signupController';
import productRouter from './controllers/productController';
import { AuthHandler } from './middlewares/authHandler';
import loginRouter from './controllers/loginController';

const auth = new AuthHandler();
const router: Router = Router();

router.get('/', welcomeController.index);
router.use('/orders', ordersRouter);
router.use('/prices', pricesRouter);
router.use('/product-create', productRouter);
// router.use('/login', loginRouter);
// router.use('/users', auth.authenticate(), usersRouter);
export default router;
