import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export const apiRequest = {
  get: (uri: string, config?: AxiosRequestConfig) => apiClient.get(uri, config),
  post: <T>(uri: string, requestData?: T, config?: AxiosRequestConfig) =>
    apiClient.post(uri, requestData, config),
  put: <T>(uri: string, requestData: T, config?: AxiosRequestConfig) =>
    apiClient.put(uri, requestData, config),
  delete: (uri: string, config?: AxiosRequestConfig) =>
    apiClient.delete(uri, config),
  patch: <T>(uri: string, requestData: T) => apiClient.patch(uri, requestData),
};

apiClient.interceptors.request.use((config) => {
  let token = {
    accessToken: undefined,
    refreshToken: undefined,
  };
  if (sessionStorage !== null) {
    token = JSON.parse(sessionStorage.getItem("authState") || "").authState
      .accessToken;
  }
  if (token && config && config.headers) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
