import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/en',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const GetRequest = (apiUrl, params, callback) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    axiosInstance
        .get(apiUrl, {
            params: params,
            headers: {
                Authorization: token ? token : '',
            },
        })
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error('GET request error:', error);
            callback(null, error);
        });
};

export const PostRequest = (apiUrl, data, callback) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    axiosInstance
        .post(apiUrl, data, {
            headers: {
                Authorization: token ? token : '',
            },
        })
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error('POST request error:', error);
            callback(null, error);
        });
};


export const PutRequest = (apiUrl, data, callback) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    axiosInstance
        .put(apiUrl, data, {
            headers: {
                Authorization: token ? token : '',
            },
        })
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error('PUT request error:', error);
            callback(null, error);
        });
};

export const DeleteRequest = (apiUrl, params, callback) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    axiosInstance
        .delete(apiUrl, {
            params: params,
            headers: {
                Authorization: token ? token : '',
            },
        })
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error('DELETE request error:', error);
            callback(null, error);
        });
};
