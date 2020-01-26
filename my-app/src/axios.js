import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...
// cmd: json-server src/server/db.json --port 3001


instance.interceptors.request.use(request => {
    console.log("[axios] [request]", request);
    // Edit request config, you can modify request before sending to server, example: add token if user has logged...

    return request;
}, error => {
    console.log("[request.error]", error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log("[axios] [response]", response);

    return response;
}, error => {
    console.log("[response.error]", error);
    return Promise.reject(error);
});

export default instance;
