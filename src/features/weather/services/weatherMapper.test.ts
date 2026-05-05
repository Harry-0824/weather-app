import { describe, it, expect } from "vitest";
import { mapOpenMeteoToWeatherData } from "./weatherMapper";
import type {
  OpenMeteoGeoResult,
  OpenMeteoCurrentWeather,
} from "../types/external-weather";

const baseGeo: OpenMeteoGeoResult = {
  name: "Taipei",
  country: "Taiwan",
  latitude: 25.05,
  longitude: 121.53,
};

const baseCurrent: OpenMeteoCurrentWeather = {
  temperature: 28.5,
  weathercode: 0,
  windspeed: 10,
  time: "2026-05-05T12:00",
};

describe("mapOpenMeteoToWeatherData", () => {
  it("晴天 code 0 應對應 clear status 與正確 description", () => {
    const data = mapOpenMeteoToWeatherData(baseGeo, baseCurrent);
    expect(data.status).toBe("clear");
    expect(data.description).toBe("晴朗");
  });

  it("雨天 code 61 應對應 rainy status", () => {
    const data = mapOpenMeteoToWeatherData(baseGeo, {
      ...baseCurrent,
      weathercode: 61,
    });
    expect(data.status).toBe("rainy");
    expect(data.description).toBe("小雨");
  });

  it("雪天 code 71 應對應 snowy status", () => {
    const data = mapOpenMeteoToWeatherData(baseGeo, {
      ...baseCurrent,
      weathercode: 71,
    });
    expect(data.status).toBe("snowy");
    expect(data.description).toBe("小雪");
  });

  it("雷雨 code 95 應對應 stormy status", () => {
    const data = mapOpenMeteoToWeatherData(baseGeo, {
      ...baseCurrent,
      weathercode: 95,
    });
    expect(data.status).toBe("stormy");
  });

  it("未知 weathercode 應對應 unknown status", () => {
    const data = mapOpenMeteoToWeatherData(baseGeo, {
      ...baseCurrent,
      weathercode: 9999,
    });
    expect(data.status).toBe("unknown");
    expect(data.description).toBe("未知");
  });

  it("city 應組合 name 與 country", () => {
    const data = mapOpenMeteoToWeatherData(baseGeo, baseCurrent);
    expect(data.city).toBe("Taipei, Taiwan");
  });

  it("無 country 時 city 只顯示 name", () => {
    const geo = { ...baseGeo, country: undefined };
    const data = mapOpenMeteoToWeatherData(geo, baseCurrent);
    expect(data.city).toBe("Taipei");
  });

  it("temperature 與 updatedAt 應正確對應", () => {
    const data = mapOpenMeteoToWeatherData(baseGeo, baseCurrent);
    expect(data.temperature).toBe(28.5);
    expect(data.updatedAt).toBe("2026-05-05T12:00");
  });
});
