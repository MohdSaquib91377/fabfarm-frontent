import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

const instance = axios.create({
    baseURL: BASE_URL,
});

export default instance;

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});