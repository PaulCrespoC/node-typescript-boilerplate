import axios from 'axios';
import * as fs from 'node:fs';

const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0OCwiZW1haWwiOiJpbnZpdGFkb0B0aXB0aS5tYXJrZXQiLCJ0eXBlIjoxLCJ1c2VybmFtZSI6Imludml0YWRvQHRpcHRpLm1hcmtldCIsImV4cCI6ODgwODkwMDQzMjR9.GZJXL3HTvI6GNDsPTyvpimmAkWn2ZELeSrJGnBKbP-o';

const instance = axios.create({
  baseURL: 'https://api.tipti.market/misuper/v3',
  headers: {
    'Accept': 'application/json',
    'Authorization': `JWT ${jwtToken}`,
    'Host': 'api.tipti.market',
    'Referer': 'https://tipti.market/',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  },
});

// Add response interceptor that saves response in json format for debugging
instance.interceptors.response.use(
  (response) => {
    // get project root path and responses folder location
    const projectRoot = process.cwd();
    const requestUrl = response.config.url.replace(/\//g, '|');
    fs.writeFileSync(`${projectRoot}/responses/${requestUrl}.json`, JSON.stringify(response.data, null, 2));
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
