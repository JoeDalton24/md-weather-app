import { Api } from "./src/core/api/api";
import { Services } from "./src/core/serviceContext";
import { WeatherApi } from "./src/domain/weather/weatherApi";
import { WeatherService } from "./src/domain/weather/weatherServices";

export function initializeServices(): Services {
  const api = new Api();
  const weatherApi = new WeatherApi(api);
  const weatherService = new WeatherService(weatherApi);

  const services = {
    weatherService,
  };

  return services;
}
