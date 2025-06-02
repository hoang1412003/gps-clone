import type { Account } from "../types/auth";
import {createAxiosInstance} from "../utils/axiosConfig";
const axios = createAxiosInstance(import.meta.env.VITE_MID_API_URL, 10000);
export const loginUserService = async (params: Account) => {
  return (await axios.post("/users/login", {
    username: params.username,
    password: params.password,
  },
  )).data;
};