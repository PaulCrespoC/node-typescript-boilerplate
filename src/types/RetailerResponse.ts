export type RetailerResponse = {
  readonly id: number;
  readonly retailer_type: string;
  readonly active_icon: string;
  readonly retailers: Retailer[];
}

export type Retailer = {
  readonly id: number;
  readonly image: string;
  readonly icon: string;
  readonly name: string;
  readonly delivery_range: string;
  readonly pickup_available: boolean;
  readonly franchise: number;
}
