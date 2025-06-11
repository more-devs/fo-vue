import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL // se configura en .env
});

export default api;
