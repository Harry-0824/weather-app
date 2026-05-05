export interface OpenMeteoGeoResult {
  name: string;
  country?: string;
  latitude: number;
  longitude: number;
}

export interface OpenMeteoGeoResponse {
  results?: OpenMeteoGeoResult[];
}

export interface OpenMeteoCurrentWeather {
  temperature: number;
  weathercode: number;
  windspeed: number;
  time: string;
}

export interface OpenMeteoWeatherResponse {
  current_weather?: OpenMeteoCurrentWeather;
}
