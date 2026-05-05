"use client";

import { useState, useRef, useCallback } from "react";
import { validateCity } from "../utils/validateCity";
import { getWeatherByCity } from "../services/weatherService";
import type { WeatherData } from "../types/weather";

export interface WeatherQueryResult {
  query: string;
  setQuery: (v: string) => void;
  search: (city: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  data: WeatherData | null;
  hasSearched: boolean;
}

export function useWeatherQuery(): WeatherQueryResult {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const search = useCallback(
    async (city: string) => {
      const validation = validateCity(city);
      if (!validation.valid) {
        setError(validation.error ?? "輸入無效");
        setData(null);
        setHasSearched(true);
        return;
      }

      if (isLoading) return;

      // Abort any in-flight request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setIsLoading(true);
      setError(null);
      setData(null);
      setHasSearched(true);

      try {
        const result = await getWeatherByCity(
          validation.value,
          controller.signal,
        );

        // Ignore if this request was already aborted (stale)
        if (controller.signal.aborted) return;

        if (result.ok) {
          setData(result.data);
          setError(null);
        } else {
          setError(result.error.message);
          setData(null);
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError("查詢失敗，請稍後再試");
        setData(null);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    },
    [isLoading],
  );

  return {
    query,
    setQuery,
    search,
    isLoading,
    error,
    data,
    hasSearched,
  };
}
