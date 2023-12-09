import { createContext, useContext } from "react";
import { WeatherService } from "../domain/weather/weatherServices";

export interface Services {
  weatherService: WeatherService;
}

export const ServicesContext = createContext<Services>(null as any);

export const useServices = (): Services => useContext(ServicesContext);
