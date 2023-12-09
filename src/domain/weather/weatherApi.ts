import { Api } from "../../core/api/api";
import { CityFromDto, CityFromOpenWeather } from "./dto";
import { CityCoordonnate, OpenWeather } from "./weather";

export class WeatherApi {
  constructor(private readonly api: Api) {}

  async getWeatherByLatAndLon(lat: number, lon: number): Promise<OpenWeather> {
    const result = await this.api.get<OpenWeather>(
      `/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric`
    );
    return result.data;
  }
  async getCityLatAndLon(city: string): Promise<CityCoordonnate> {
    // console.log("this",this.api.get)
    const result = await this.api.get<CityFromOpenWeather>(
      `/weather?q=${city}`
    );
    return CityFromDto(result.data);
  }
}
