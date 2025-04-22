import axios, { AxiosRequestConfig } from "axios";
// const BASE_URL=

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (requestConfig?: AxiosRequestConfig) => {
    const controller = new AbortController();
    const res = await axiosInstance.get<T>(this.endpoint, {
      signal: controller.signal,
      ...requestConfig,
    });
    return res.data;
  };

  getById = async (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  post = async (data: T) => {
    const res = await axiosInstance.post<T>(this.endpoint, data);
    return res.data;
  };
}

export default ApiClient;
