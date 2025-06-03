import {createAxiosInstance} from "../utils/axiosConfig";
const axios = createAxiosInstance(import.meta.env.VITE_MID_API_URL, 10000);
export const getGPSService = async () => {
  return (await axios.get("/realtime/gps",
  )).data;
};