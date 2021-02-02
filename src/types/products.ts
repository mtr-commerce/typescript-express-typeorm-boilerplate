
export interface ProductDetails {
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  price?: string;
  tags: string[];
  variants?: ProductVariant[];
  images?: ProductImages[];
}

export interface ProductVariant {
  option1?: string;
  price?: string;
}

export interface ProductImages {
  src: string;
}

export interface ProductParams {
  product: ProductDetails;
}
