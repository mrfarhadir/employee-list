import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
export class Api {
  request: AxiosInstance = {} as AxiosInstance;

  constructor(
    baseUrl: string,
    public apiKey: string,
    public config?: AxiosRequestConfig
  ) {
    this.request = axios.create(this.config);
    this.request.defaults.baseURL = baseUrl;
    this.request.defaults.headers.common.Authorization = this.apiKey;
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
