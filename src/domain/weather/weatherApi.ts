import { Api } from "../../core/api/api";
import { Weather } from "./weather";

export class WeatherApi {
  constructor(private readonly api: Api) {}

  async getWeatherByLatAndLon(lat: number, lon: number): Promise<Weather> {
    const result = await this.api.get<Weather>(`lat=${33.44}&lon=${-94.04}`);
    return result.data;
  }
}
