import axios from "axios";

export const axiosInstance = axios.create({
    baseurl: "http://localhost:5173/api",
    withCredentials: true, // send the cookies with the request
})