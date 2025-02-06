import axios from "axios";
import { API_BASE_URL } from "./api_constants";

const instance = axios.create({
    withCredentials: false,
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    
});
export default instance;
