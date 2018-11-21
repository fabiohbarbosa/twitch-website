import axios from 'axios';
import store from '../store';

const httpClient = axios.create({
  baseURL: '/api'
});

httpClient.interceptors.request.use(config => {
  store.dispatch('loading/toggle');
  return config;
});

// before a response it stop loading
httpClient.interceptors.response.use(response => {
  store.dispatch('loading/toggle');
  return response;
});

export default httpClient;
