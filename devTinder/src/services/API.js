import axios from 'axios';

const API = axios.create({
   baseURL: 'http://10.0.3.2:3333'
});

export default API;
