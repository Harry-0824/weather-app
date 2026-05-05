import type { ApiResult } from "../types/api";
import type { WeatherData } from "../types/weather";

export async function getWeatherByCity(
  city: string,
  signal?: AbortSignal,
): Promise<ApiResult<WeatherData>> {
  let response: Response;
  try {
    response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`, {
      signal,
    });
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw err;
    }
    return {
      ok: false,
      error: {
        message: "網路連線失敗，請確認網路後重試",
        code: "NETWORK_ERROR",
      },
    };
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    return {
      ok: false,
      error: { message: "回應資料解析失敗", code: "PARSE_ERROR" },
    };
  }

  return json as ApiResult<WeatherData>;
}
