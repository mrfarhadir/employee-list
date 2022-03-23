import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Employee } from "@/types";
export class Api {
  request: AxiosInstance = {} as AxiosInstance;

  constructor(baseUrl: string, public config?: AxiosRequestConfig) {
    this.request = axios.create(this.config);
    this.request.defaults.baseURL = baseUrl;
  }

  private async get(url: string) {
    try {
      const response = await this.request.get(url);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  public async employeesList(): Promise<Array<Employee>> {
    const result = await this.get("/employees");
    return result || [];
  }
}
