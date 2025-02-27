import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:import.meta.env.BACK_BASE_URL,
    withCredentials: true
});
