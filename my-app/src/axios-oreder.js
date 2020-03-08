import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/gecko-8200b/database/'
});

export default instance;