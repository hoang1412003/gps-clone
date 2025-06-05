import type { Account } from "../types/auth";
import {createAxiosInstance} from "../utils/axiosConfig";
import Cookies from "js-cookie";
const axios = createAxiosInstance(import.meta.env.VITE_MID_API_URL, 10000);
export const loginUserService = async (params: Account) => {
  return (await axios.post("/users/login", {
    username: params.username,
    password: params.password,
  },
  )).data;
};

export const logOutService = async () => {
  localStorage.removeItem("uid");
  localStorage.removeItem("customerId");
  localStorage.removeItem("role");
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  window.location.replace("/login");
}