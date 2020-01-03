import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...
// cmd: json-server src/server/db.json --port 3001


instance.interceptors.request.use(request => {
    console.log("[request]", request);
    // Edit request config
    return request;
}, error => {
    console.log("[request.error]", error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    // console.log("[response]", response);
    // Edit request config
    return response;
}, error => {
    console.log("[response.error]", error);
    return Promise.reject(error);
});

export default instance;