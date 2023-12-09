import { Weather } from "./weather";
import { WeatherApi } from "./weatherApi";

export class WeatherService {
  constructor(private readonly weatherApi: WeatherApi) {}

  async getWeatherByLatAndLon(lat: number, lon: number): Promise<Weather> {
    return this.weatherApi.getWeatherByLatAndLon(lat, lon);
  }
}
