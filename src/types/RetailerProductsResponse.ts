export type RetailerProductsResponse = {
  readonly count: number;
  readonly next: string;
  readonly previous: null;
  readonly results: Result[];
}

export type Result = {
  readonly id: number;
  readonly product: Product;
  readonly price: number;
  readonly hours_to_delivery: number;
  readonly unique_delivery: boolean;
  readonly discount_card: null;
  readonly discount_applied: boolean;
  readonly discount: number;
  readonly position: number;
  readonly tax_value: number;
  readonly pay: null;
  readonly carry: null;
  readonly discounted_price: number | null;
  readonly discount_five_by_five: null;
  readonly sku: string;
  readonly discount_multiplier: boolean;
  readonly available: boolean;
  readonly high_demand: boolean;
  readonly gm_recommendation: boolean;
}

export type Product = {
  readonly id: number;
  readonly name: string;
  readonly quantity: number;
  readonly unit: string;
  readonly bulk: boolean;
  readonly unit_stock: boolean;
  readonly group_id: null;
  readonly attributes: null;
  readonly identifiers: string[];
  readonly image_medium: string;
  readonly category: null;
}
