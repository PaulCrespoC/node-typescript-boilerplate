export type RetailerByIDResponse = {
  readonly id: number;
  readonly name: string;
  readonly franchise: Franchise;
  readonly open_time: string;
  readonly close_time: string;
  readonly time_alert_close: null;
  readonly logo: string;
  readonly icon: string;
  readonly enabled_time_alert_close: boolean;
  readonly retailer_types: string[];
  readonly retailer_type: string;
  readonly delivery_range: string;
  readonly header: string;
  readonly header_tablet: string;
  readonly primary_color: string;
  readonly secondary_color: string;
  readonly show_alert_first_time: boolean;
  readonly pickup_available: boolean;
  readonly store_name: string;
}

export type Franchise = {
  readonly id: number;
  readonly shopper_note_title: FranchisePriceText;
  readonly shopper_note_placeholder: FranchisePriceText;
  readonly franchise_price_text_color: string;
  readonly franchise_price_text: FranchisePriceText;
  readonly name: string;
  readonly logo: string;
  readonly icon: string;
  readonly header: string;
  readonly header_tablet: string;
  readonly primary_color: string;
  readonly secondary_color: string;
}

export type FranchisePriceText = {
  readonly EN: string;
  readonly ES: string;
}
