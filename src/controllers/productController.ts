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
  const params: ProductDetails = buildProductPayload(req.body);
  const products = await productsService.create(params);

  res.status(HttpStatus.OK).json({
    success: true,
    id: 34714009043037,
    data: test
  });

});

productRouter.post('/', async (req: Request, res: Response) => {
  const inventoryService = new InventoryService();
  const locations = await inventoryService.locations();
  const locationsIds = JSON.parse(JSON.stringify(locations)).map((i: InventoryLocation) => i.id);
  const productInventoryId = req.body.variants[0].inventory_item_id;
  const updateTrackingToProduct = await inventoryService.inventoryItem(productInventoryId, { tracked: true });

  logger.info('------------------------------------------req.body)', req.body);
  logger.info('------------------------------------------LOCATIONS)', locationsIds);
  logger.info('------------------------------------------Variant item id)', productInventoryId, updateTrackingToProduct);

  locationsIds.forEach(async (id: number) => {
    const params: InventorySet = {
      location_id: id,
      inventory_item_id: productInventoryId,
      available: 1
    };

    await inventoryService.inventoryLevel(params);
  });


  res.status(HttpStatus.OK).json({
    success: true,
  });
});

export default productRouter;
