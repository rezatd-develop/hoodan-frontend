import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include'
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
