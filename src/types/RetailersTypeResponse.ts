export type RetailersTypeResponse = {
  readonly retailers_type: RetailersType[];
}

export type RetailersType = {
  readonly id: number;
  readonly retailer_type: string;
  readonly active_icon: string;
  readonly inactive_icon: string;
  readonly header_image: string;
}
