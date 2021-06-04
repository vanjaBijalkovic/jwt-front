import axios from 'axios'

const baseService = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export default baseService;