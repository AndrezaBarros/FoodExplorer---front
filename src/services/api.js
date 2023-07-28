import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-g8xj.onrender.com"
});