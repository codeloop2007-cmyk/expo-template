import { env } from "@/config/env.config";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: env.EXPO_PUBLIC_BASE_URL,
});

export const customAxios = async <T>(
  config: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.request<T>(config);

  return response.data;
};
