import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-lession-a191f.firebaseio.com/'
});

export default instance;