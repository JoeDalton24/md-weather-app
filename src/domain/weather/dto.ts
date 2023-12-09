import { CityCoordonnate } from "./weather";

export interface CityFromOpenWeather {
  coord: {
    lon: number;
    lat: number;
  };
}

export function CityFromDto(dto: CityFromOpenWeather): CityCoordonnate {
  return {
    lat: dto.coord.lat,
    lon: dto.coord.lon,
  };
}
