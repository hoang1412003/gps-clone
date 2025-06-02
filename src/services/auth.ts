import type { Account } from "../types/auth";
import axiosInstance from "../utils/axiosConfig";

export const loginUser = async (params: Account) => {
  return await axiosInstance.post("/users/login", {
    username: params.username,
    password: params.password,
  });
};