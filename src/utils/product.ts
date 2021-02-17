import { ProductDetails } from '../types/products';
import { PRODUCT_CREATION } from '../constants/products';
import { IDictionary } from '../types/global';
import { priceBuilder } from '../utils/prices';

const { BOWL_PRODUCT_IMAGE } = process.env;

export const optionsToProductbody = (options: IDictionary<string[]>): string => {
  const concatOptions = (opt: string[]) => opt.map((i: string) => ` • ${i}`).join('<br />');
  const optionsKeys = Object.keys(options);

  const test = optionsKeys.map((key: string) => {
    return `${key.toUpperCase()}:${'<br />'}${concatOptions(options[key])}`;
  });

  return test.join('<br /><br />');
};

export const buildProductPayload = (title: string, options: IDictionary<string[]>): ProductDetails => ({
  title: title || PRODUCT_CREATION.title,
  body_html: optionsToProductbody(options),
  vendor: PRODUCT_CREATION.vendor,
  product_type: PRODUCT_CREATION.product_type,
  price: `${priceBuilder(options)}`,
  tags: PRODUCT_CREATION.tags,
  images: [{
    src: BOWL_PRODUCT_IMAGE
  }]
});
