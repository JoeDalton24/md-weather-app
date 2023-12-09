import { CityCoordonnate, OpenWeather, Weather } from "./weather";
import { WeatherApi } from "./weatherApi";

export class WeatherService {
  constructor(private readonly weatherApi: WeatherApi) {}

  async getWeatherByLatAndLon(city: string): Promise<OpenWeather> {
    const { lat, lon } = await this.getCityLatAndLon(city);

    return this.weatherApi.getWeatherByLatAndLon(lat, lon);
  }
  async getCityLatAndLon(city: string): Promise<CityCoordonnate> {
    return this.weatherApi.getCityLatAndLon(city);
  }
}
