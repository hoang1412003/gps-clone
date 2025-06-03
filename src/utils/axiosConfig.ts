import axios from "axios";
import Cookies from "js-cookie";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function subscribeTokenRefresh(cb: (token: string) => void) {
  refreshSubscribers.push(cb);
}

function onRefreshed(token: string) {
  refreshSubscribers.forEach(cb => cb(token));
  refreshSubscribers = [];
}

function handleLogout() {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  window.location.replace("/login"); // tránh lưu vào history
}

export const createAxiosInstance = (domain: string, timeout: number) => {
  const axiosInstance = axios.create({
    baseURL: domain,
    timeout,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Request interceptor
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

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        console.log("check refreshToken: ", originalRequest)
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) {
          handleLogout();
          return Promise.reject(error);
        }

        if (isRefreshing) {
          return new Promise((resolve) => {
            subscribeTokenRefresh((newToken) => {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              resolve(axiosInstance(originalRequest));
            });
          });
        }

        isRefreshing = true;

        try {
          const res = await axios.post(`${domain}/users/refresh-token`, {
            refresh_token: refreshToken,
          });

          const { result, data } = res.data;
          if (result && data?.token) {
            const newToken = data.token;
            Cookies.set("accessToken", newToken);

            axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;
            onRefreshed(newToken);

            return axiosInstance(originalRequest);
          } else {
            handleLogout();
            return Promise.reject(error);
          }
        } catch (err) {
          handleLogout();
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
