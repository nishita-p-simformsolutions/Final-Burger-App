import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-e6dbe-default-rtdb.firebaseio.com/'
});

export default instance;