import { getProductDetail } from './lib/requests.js';

const response = await getProductDetail(8509654);

console.log(response);
