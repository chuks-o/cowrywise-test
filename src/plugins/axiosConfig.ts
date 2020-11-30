import axios from 'axios';

axios.interceptors.request.use(
  function(config) {
    const accessToken = `Client-ID ${process.env.VUE_APP_ACCESS_TOKEN}`;

    config.baseURL = process.env.VUE_APP_BASE_URL;
    config.headers['Authorization'] = accessToken;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
