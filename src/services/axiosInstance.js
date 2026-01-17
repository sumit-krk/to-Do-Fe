import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // agar cookies bhi use ho rahi hain
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Request Interceptor (GLOBAL)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ya redux store se

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
