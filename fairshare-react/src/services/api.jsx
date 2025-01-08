import axios from 'axios';

//API connection will be here

const API = axios.create({
    baseURL: 'http://localhost:5000',
});

export default API;