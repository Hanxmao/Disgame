import axios, { AxiosRequestConfig } from "axios";

export interface DataFetched<T> {
  count: number;
  next?: string;
  previous?:string;
  results: T[];
}

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "833aa126ddeb4e9bbd31731b6710b44e",
  },
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

  post = async (data: T) => {
    const res = await axiosInstance.post<T>(this.endpoint, data);
    return res.data;
  };
}

export default ApiClient;
