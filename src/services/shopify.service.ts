import Shopify from 'shopify-api-node';
import { Logger, ILogger } from '../utils/logger';
import { ProductDetails, ProductVariant } from '../types/products';
import { InventorySet, InventoryItemUpdate } from '../types/inventory';
import { param } from 'express-validator/check';

const { SHOPIFY_STORE, SHOPIFY_KEY, SHOPIFY_PASS } = process.env;

const shopify = new Shopify({
  shopName: SHOPIFY_STORE,
  apiKey: SHOPIFY_KEY,
  password: SHOPIFY_PASS
});

export class ShopifyService {

  logger: ILogger;

  constructor() {
    this.logger = new Logger(__filename);
  }

  async orders(): Promise<void | Shopify.IOrder[]> {
    return await shopify.order
      .list({ limit: 5 })
      .then((orders) => orders)
      .catch((err) => console.error(err));
  }
}

export class InventoryService {

  logger: ILogger;

  constructor() {
    this.logger = new Logger(__filename);
  }

  async locations(): Promise<void | Shopify.ILocation[]> {
    this.logger.info('Getting store Locations');
    return await shopify.location.list();
  }

  async inventoryItem(id: number, params: InventoryItemUpdate): Promise<void | Shopify.IInventoryItem> {
    return await shopify.inventoryItem.update(id, params);
  }

  async inventoryLevel(params: InventorySet): Promise<void | Shopify.IInventoryLevel> {
    return await shopify.inventoryLevel.set(params);
  }
}

export class ProductsService {

  logger: ILogger;

  constructor() {
    this.logger = new Logger(__filename);
  }

  async count(): Promise<number | void> {
    return await shopify.product
      .count()
      .then((product) => product)
      .catch((err) => console.error(err));
  }

  async get(productId: number): Promise<any> {
    return await shopify.product
      .get(productId)
      .then((product) => product)
      .catch((err) => console.error(err));
  }

  async create(params: ProductDetails): Promise<any> {
    const createdProduct = await shopify.product
        .create(params)
        .then((product) => product)
        .catch((err) => console.error(err));

    const { id, variants } = JSON.parse(JSON.stringify(createdProduct));
    this.logger.info('Product created!', id);

    const defaultVariant = variants[0];
    this.logger.info('Got variant', defaultVariant.id);

    const updatedvariant = await this.updateVariant(defaultVariant.id, { price: params.price });
    this.logger.info('Updated variant', updatedvariant.id);
    return await this.get(id);
  }

  async addImage(productId: number, imageUrl: string): Promise<any> {
    return await shopify.productImage
        .create(productId, { src: imageUrl })
        .then((image) => image)
        .catch((err) => console.error(err));
  }

  async addVariant(productId: number, params: ProductVariant[]): Promise<any> {
    return await shopify.productVariant
        .create(productId, params)
        .then((image) => image)
        .catch((err) => console.error(err));
  }

  async updateVariant(variantId: number, params: ProductVariant): Promise<any> {
    return await shopify.productVariant
        .update(variantId, params)
        .then((variant) => variant)
        .catch((err) => console.error(err));
  }
}
