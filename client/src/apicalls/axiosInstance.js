
import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL:  'https://julxs.onrender.com',
    headers : {
         authorization : `Bearer ${localStorage.getItem('token')}`
    }
})
