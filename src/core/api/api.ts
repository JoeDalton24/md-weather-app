import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Config } from "../config/config";

export class Api {
  private readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
    // this.instance.defaults.headers = { "x-api-version": "1.0" };
    this.initializeInteceptors();
  }

  get<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.get(url, config);
  }

  post<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.post(url, data, config);
  }

  put<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.put(url, data, config);
  }

  delete<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.delete(url, config);
  }

  private initializeInteceptors(): void {
    this.instance.interceptors.request.use((config) => ({
      ...config,
      url: `${Config.API_BASE_URL}${config.url}&appid=${Config.OPEN_WEATHER_KEY}`,
    }));
  }
}
