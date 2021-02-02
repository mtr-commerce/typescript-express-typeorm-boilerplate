import { NextFunction, Request, Response, Router } from 'express';
import * as HttpStatus from 'http-status-codes';
import { Logger, ILogger } from '../utils/logger';
import { priceList, priceBuilder } from '../utils/prices';

const logger: ILogger = new Logger(__filename);

const pricesRouter: Router = Router();

pricesRouter.get('/', async (req: Request, res: Response) => {
  res.status(HttpStatus.OK).json({
    success: true,
    toppings: priceList,
  });
});

pricesRouter.post('/', async (req: Request, res: Response) => {
  logger.info('Building price based on options');
  const price = priceBuilder(req.body);
  logger.info('Computed price: ', price);
  res.status(HttpStatus.OK).json({
    success: true,
    price,
  });

});

export default pricesRouter;
