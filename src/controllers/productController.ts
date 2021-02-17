import { NextFunction, Request, Response, Router } from 'express';
import * as HttpStatus from 'http-status-codes';
import { Logger, ILogger } from '../utils/logger';
import { ProductsService, InventoryService } from '../services/shopify.service';
import { ProductDetails } from '../types/products';
import { InventoryLocation, InventorySet } from '../types/inventory';
import { buildProductPayload } from '../utils/product';

const logger: ILogger = new Logger(__filename);

const productRouter: Router = Router();

productRouter.get('/', async (req: Request, res: Response) => {
  const locations = new InventoryService();
  const test = await locations.locations();
  console.log(test);


  const productsService = new ProductsService();
  const params: ProductDetails = buildProductPayload(req.body.name, req.body.toppings);
  const products = await productsService.create(params);

  res.status(HttpStatus.OK).json({
    success: true,
    id: 34714009043037,
    data: test
  });

});

productRouter.post('/', async (req: Request, res: Response) => {
  const productService = new ProductsService();
  const locations = await productService.create(req.body);

  logger.info('------------------------------------------req.body)', req.body);


  res.status(HttpStatus.OK).json({
    success: true,
  });
});

export default productRouter;
