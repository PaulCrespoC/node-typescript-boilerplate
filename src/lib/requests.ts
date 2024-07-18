import { RetailersTypeResponse } from '../types/RetailersTypeResponse.js';
import http from './http.js';
import { RetailerResponse } from '../types/RetailerResponse.js';
import { RetailerByIDResponse } from '../types/RetailerByIDResponse.js';
import { RetailerProductsResponse } from '../types/RetailerProductsResponse.js';
import { ProductDetailResponse } from '../types/ProductDetailResponse.js';
import { ProductRecommendationsResponse } from '../types/ProductRecommendationsResponse.js';

export async function getRetailersType(sector = 18, showCareInformation = true, showFranchise = true): Promise<RetailersTypeResponse | null> {
  const response = await http.get<RetailersTypeResponse>(`sector/${sector}/rest_retailers?show_care_information=${showCareInformation}&show_franchise=${showFranchise}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function getRetailers(sector = 18, retailerTypeId = 1, size = 3, showCareInformation = true, showFranchise = true): Promise<RetailerResponse | null> {
  const response = await http.get<RetailerResponse>(`sector/${sector}/retailers?retailer_type_id=${retailerTypeId}&size=${size}&show_care_information=${showCareInformation}&show_franchise=${showFranchise}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function getRetailerById(retailerId = 1087): Promise<RetailerByIDResponse | null> {
  // misuper/v3/retailer_by_id_franchise_sector/?sector_id=18&retailer_id=1079
  const response = await http.get<RetailerByIDResponse>(`retailer_by_id_franchise_sector/?sector_id=18&retailer_id=${retailerId}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function getProductsByRetailerId(retailerId = 1087, pageSize = 12, page = 1): Promise<RetailerProductsResponse | null> {
  const response = await http.get<RetailerProductsResponse>(`client_profile/promotion_personalized/retailer/${retailerId}/?page_size=${pageSize}&page=${page}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function getProductDetail(stockItemId = 8509654, notShowDiscount = true): Promise<ProductDetailResponse | null> {
  const response = await http.get<ProductDetailResponse>(`product_detail_api/?stock_item_id=${stockItemId}&not_show_discount=${notShowDiscount}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function getProductRecommendations(retailerId = 1079, itemId = 8509654, pageSize = 12, page = 1): Promise<ProductRecommendationsResponse | null> {
  // misuper/v2/product/recommendations/items/category/?page_size=12&page=1&retailer_id=1079&item_id=8509654
  const response = await http.get<ProductRecommendationsResponse>(`misuper/v2/product/recommendations/items/category/?page_size=${pageSize}&page=${page}&retailer_id=${retailerId}&item_id=${itemId}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}
