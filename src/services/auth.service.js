import baseService from './base.service'

export default class AuthService {
    constructor() {
        this.setDefaultHeaders(localStorage.getItem('token'))
    }

    async login(user) {
        const response = await baseService.post('/login', user);
        this.setDefaultHeaders(response.data.token);
        
        return response;
    }

    async logout() {
        return new Promise(resolve => {
            baseService.defaults.headers.common['Authorization'] = ``;
            localStorage.removeItem('token');

            resolve();
        })
    }

    async getUsers() {
        const response = await baseService.get('/getUser');

        return response;
    }

    setDefaultHeaders(token) {
        if (!token) {
            return;
        }

        localStorage.setItem('token', token);
        baseService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

export const authService = new AuthService(); 