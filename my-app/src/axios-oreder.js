import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gecko-8200b.firebaseio.com'
});

export default instance;