import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useWeatherQuery } from "./useWeatherQuery";
import * as weatherService from "../services/weatherService";
import type { WeatherData } from "../types/weather";

const mockWeatherData: WeatherData = {
  city: "Taipei, Taiwan",
  temperature: 28.5,
  status: "clear",
  description: "晴朗",
  updatedAt: "2026-05-05T12:00",
};

describe("useWeatherQuery", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("初始狀態應正確", () => {
    const { result } = renderHook(() => useWeatherQuery());
    expect(result.current.query).toBe("");
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();
    expect(result.current.hasSearched).toBe(false);
  });

  it("成功查詢應更新 data 並清除 error", async () => {
    vi.spyOn(weatherService, "getWeatherByCity").mockResolvedValue({
      ok: true,
      data: mockWeatherData,
    });

    const { result } = renderHook(() => useWeatherQuery());

    await act(async () => {
      await result.current.search("Taipei");
    });

    expect(result.current.data).toEqual(mockWeatherData);
    expect(result.current.error).toBeNull();
    expect(result.current.hasSearched).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });

  it("API 回傳 error 應設定 error message", async () => {
    vi.spyOn(weatherService, "getWeatherByCity").mockResolvedValue({
      ok: false,
      error: { message: "找不到城市", code: "CITY_NOT_FOUND" },
    });

    const { result } = renderHook(() => useWeatherQuery());

    await act(async () => {
      await result.current.search("NonExistentCity");
    });

    expect(result.current.error).toBe("找不到城市");
    expect(result.current.data).toBeNull();
  });

  it("空字串不應送出請求", async () => {
    const spy = vi.spyOn(weatherService, "getWeatherByCity");

    const { result } = renderHook(() => useWeatherQuery());

    await act(async () => {
      await result.current.search("");
    });

    expect(spy).not.toHaveBeenCalled();
    expect(result.current.error).toBeDefined();
  });

  it("只有空白不應送出請求", async () => {
    const spy = vi.spyOn(weatherService, "getWeatherByCity");

    const { result } = renderHook(() => useWeatherQuery());

    await act(async () => {
      await result.current.search("   ");
    });

    expect(spy).not.toHaveBeenCalled();
  });

  it("setQuery 應更新 query", () => {
    const { result } = renderHook(() => useWeatherQuery());

    act(() => {
      result.current.setQuery("Tokyo");
    });

    expect(result.current.query).toBe("Tokyo");
  });
});
