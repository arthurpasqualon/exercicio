import axios from 'axios';

const api = axios.create({
    baseURL: 'http://dev.4all.com:3003'
});

export default api;
