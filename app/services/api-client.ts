import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: '',
    timeout: 12000,
})