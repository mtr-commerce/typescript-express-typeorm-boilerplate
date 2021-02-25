import { ProductDetails } from '../types/products';
import { PRODUCT_CREATION } from '../constants/products';
import { IDictionary } from '../types/global';
import { priceBuilder } from '../utils/prices';

const { BOWL_PRODUCT_IMAGE } = process.env;

export const optionsToProductbody = (options: IDictionary<string[]>, instructions: string[]): string => {
  const concatOptions = (opt: string[]) => opt.map((i: string) => {
    const itemSplit = i.split('|');
    const itemQty = itemSplit[1] && parseInt(itemSplit[1]) > 1 ? 'x' + itemSplit[1] : 'x1';

    return ` • ${itemSplit[0]} ${ itemQty }`;
  }).join('<br />');
  const optionsKeys = Object.keys(options);
  const toppingsItems = optionsKeys.map((key: string) => {
    return `${key.toUpperCase()}:${'<br />'}${concatOptions(options[key])}`;
  });
  const toppingsSorted = toppingsItems.join('<br /><br />');
  const instructionsItems = instructions.map((i: string) => ` • ${i}`).join('<br />');
  const instructionsAdded = toppingsSorted + '<br /><br />INSTRUCCIONES:<br />' + instructionsItems;

  return instructionsAdded;
};

export const buildProductPayload = (title: string, options: IDictionary<string[]>, instructions: string[]): ProductDetails => ({
  title: PRODUCT_CREATION.title + ': ' + title,
  body_html: optionsToProductbody(options, instructions),
  vendor: PRODUCT_CREATION.vendor,
  product_type: PRODUCT_CREATION.product_type,
  price: `${priceBuilder(options)}`,
  tags: PRODUCT_CREATION.tags,
  images: [{
    src: BOWL_PRODUCT_IMAGE
  }]
});
