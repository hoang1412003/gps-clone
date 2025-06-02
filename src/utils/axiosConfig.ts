import axios from "axios";
import Cookies from "js-cookie";

const domain = import.meta.env.VITE_MID_API_URL;

const axiosInstance = axios.create({
  baseURL: domain,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor để xử lý lỗi 401 và tự động refresh token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) {
        handleLogout();
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(`${domain}/users/refresh-token`, {
          refresh_token: refreshToken,
        });

        const { result, data } = res.data;
        if (result && data?.token) {
          Cookies.set("accessToken", data.token);

          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return axiosInstance(originalRequest);
        } else {
          handleLogout();
        }
      } catch (err) {
        handleLogout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  window.location.href = "/login";
}

export default axiosInstance;
