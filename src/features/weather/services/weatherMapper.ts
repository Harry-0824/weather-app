import type { WeatherData, WeatherStatus } from "../types/weather";
import type {
  OpenMeteoGeoResult,
  OpenMeteoCurrentWeather,
} from "../types/external-weather";

const WEATHER_CODE_DESCRIPTION: Record<number, string> = {
  0: "晴朗",
  1: "主要晴朗",
  2: "部分多雲",
  3: "多雲",
  45: "霧",
  48: "霧",
  51: "細雨",
  53: "細雨",
  55: "細雨",
  56: "凍雨",
  57: "凍雨",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "凍雨",
  67: "凍雨",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "陣雨",
  81: "陣雨",
  82: "大陣雨",
  85: "陣雪",
  86: "大陣雪",
  95: "雷雨",
  96: "雷雨伴冰雹",
  99: "雷雨伴冰雹",
};

const WEATHER_CODE_STATUS: Record<number, WeatherStatus> = {
  0: "clear",
  1: "clear",
  2: "cloudy",
  3: "cloudy",
  45: "foggy",
  48: "foggy",
  51: "rainy",
  53: "rainy",
  55: "rainy",
  56: "rainy",
  57: "rainy",
  61: "rainy",
  63: "rainy",
  65: "rainy",
  66: "rainy",
  67: "rainy",
  71: "snowy",
  73: "snowy",
  75: "snowy",
  77: "snowy",
  80: "rainy",
  81: "rainy",
  82: "rainy",
  85: "snowy",
  86: "snowy",
  95: "stormy",
  96: "stormy",
  99: "stormy",
};

export function mapOpenMeteoToWeatherData(
  geo: OpenMeteoGeoResult,
  current: OpenMeteoCurrentWeather,
): WeatherData {
  const city = geo.country ? `${geo.name}, ${geo.country}` : geo.name;
  const status: WeatherStatus =
    WEATHER_CODE_STATUS[current.weathercode] ?? "unknown";
  const description = WEATHER_CODE_DESCRIPTION[current.weathercode] ?? "未知";

  return {
    city,
    temperature: current.temperature,
    status,
    description,
    updatedAt: current.time,
  };
}
