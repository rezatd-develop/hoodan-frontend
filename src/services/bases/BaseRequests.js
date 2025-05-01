import axios from 'axios';
const culture = window?.location?.pathname?.slice(1, 3);

const axiosInstance = axios.create({
    baseURL: `http://localhost:5001/api/${culture}`,
    timeout: 5000,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
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
            callback(error.response.data);
        });
};


export const PutRequest = (apiUrl, data, callback) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const headers = {
        Authorization: token ? token : '',
    };

    if (!(data instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    axiosInstance
        .put(apiUrl, data, { headers })
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
