import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/authors',
    withCredentials: true,
    headers: {
        accept: 'application/json'
    }
});

export default instance;