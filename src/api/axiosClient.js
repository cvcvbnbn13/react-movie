import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params =>
    queryString.stringify({
      ...params,
      api_key: apiConfig.apikey,
      language: 'zh-TW',
    }),
});

// 攔截器
axiosClient.interceptors.request.use(async req => req);

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  error => {
    throw error;
  }
);

export default axiosClient;
