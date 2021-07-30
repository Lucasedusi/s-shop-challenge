import axios from 'axios';

const api = axios.create({
  baseURL: 'https://61040ba63356ea001748f657.mockapi.io/shop/',
});

export default api;
