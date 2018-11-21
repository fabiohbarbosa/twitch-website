import axios from 'axios'

const httpClient = axios.create({
  baseURL: '/api'
});

httpClient.interceptors.request.use(config => {
  console.log('START Loading');
  return config;
})

// before a response is returned stop nprogress
httpClient.interceptors.response.use(response => {
  console.log('DONE!');
  return response
})

export default httpClient;
