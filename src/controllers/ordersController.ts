import { NextFunction, Request, Response, Router } from 'express';
import * as HttpStatus from 'http-status-codes';
import { Logger, ILogger } from '../utils/logger';
import { ProductsService } from '../services/shopify.service';
import { ProductDetails } from '../types/products';
import { optionsToProductbody, buildProductPayload } from '../utils/product';

const logger: ILogger = new Logger(__filename);

const ordersRouter: Router = Router();

ordersRouter.post('/', async (req: Request, res: Response) => {
  logger.info(optionsToProductbody(req.body));

  const productsService = new ProductsService();
  const params: ProductDetails = buildProductPayload(req.body);
  const products = await productsService.create(params);

  res.status(HttpStatus.OK).json({
    success: true,
    products,
  });

});

export default ordersRouter;
