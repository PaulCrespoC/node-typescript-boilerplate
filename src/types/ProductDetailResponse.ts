export type ProductDetailResponse = {
  readonly item: Item;
  readonly rate: string;
}

export type Item = {
  readonly id: number;
  readonly sku: string;
  readonly available: boolean;
  readonly retailer: Retailer;
  readonly price: string;
  readonly product: Product;
  readonly description: null;
  readonly only_discount_item: boolean;
  readonly margin: string;
  readonly high_demand: boolean;
  readonly hours_to_delivery: number;
  readonly unique_delivery: boolean;
  readonly cost_of_delivery: string;
  readonly carry: null;
  readonly pay: null;
  readonly price_with_discount: string;
  readonly discount_five_by_five: boolean;
  readonly discount_card: null;
  readonly stock_available: number;
}

export type Product = {
  readonly id: number;
  readonly ean: string;
  readonly name: string;
  readonly quantity: string;
  readonly tax: Tax[];
  readonly unit: string;
  readonly cover: Cover[];
  readonly description: string;
  readonly bulk: boolean;
  readonly nutrition_colors: string[];
  readonly category: Category[];
  readonly subcategory: Subcategory[];
  readonly unit_stock: boolean;
  readonly colors: string[];
  readonly deep_link: string;
  readonly media: Media[];
  readonly group_id: null;
  readonly attributes: null;
  readonly characteristic: string;
  readonly identifiers: Identifier[];
  readonly presentation: string;
  readonly ecommerce_size: null;
  readonly features: Feature[];
  readonly ecommerce_age: null;
  readonly dimension_height: null;
  readonly dimension_width: null;
  readonly dimension_length: null;
  readonly armed: null;
  readonly dimension_weight: null;
}

export type Category = {
  readonly id: number;
  readonly name: string;
  readonly icon: string;
  readonly translate_information: Identifier;
  readonly request_subcategories: boolean;
}

export type Identifier = {
  readonly EN: string;
  readonly ES: string;
}

export type Cover = {
  readonly original: string;
  readonly medium: string;
  readonly small: string;
}

export type Feature = {
  readonly order: number;
  readonly typeCode: number;
  readonly typeName: string;
  readonly description: string;
}

export type Media = {
  readonly product: number;
  readonly resource: string;
  readonly is_cover: boolean;
  readonly alt_text: string;
}

export type Subcategory = {
  readonly id: number;
  readonly name: string;
  readonly icon: null;
}

export type Tax = {
  readonly rate: string;
  readonly name: string;
  readonly description: string;
}

export type Retailer = {
  readonly id: number;
  readonly name: string;
  readonly primary_color: string;
  readonly secondary_color: string;
  readonly icon: string;
}
