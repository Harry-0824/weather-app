import { NextRequest, NextResponse } from "next/server";
import type {
  OpenMeteoGeoResponse,
  OpenMeteoWeatherResponse,
} from "../../../features/weather/types/external-weather";
import type { ApiResult } from "../../../features/weather/types/api";
import type { WeatherData } from "../../../features/weather/types/weather";
import { mapOpenMeteoToWeatherData } from "../../../features/weather/services/weatherMapper";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const city = searchParams.get("city")?.trim() ?? "";

  if (!city) {
    const result: ApiResult<never> = {
      ok: false,
      error: { message: "缺少 city 參數", code: "INVALID_INPUT" },
    };
    return NextResponse.json(result, { status: 400 });
  }

  // 1. Geocoding
  let geoResponse: Response;
  try {
    geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=zh&format=json`,
    );
  } catch {
    const result: ApiResult<never> = {
      ok: false,
      error: { message: "地點查詢失敗，請稍後再試", code: "UPSTREAM_ERROR" },
    };
    return NextResponse.json(result, { status: 502 });
  }

  if (!geoResponse.ok) {
    const result: ApiResult<never> = {
      ok: false,
      error: { message: "地點查詢服務異常", code: "UPSTREAM_ERROR" },
    };
    return NextResponse.json(result, { status: 502 });
  }

  let geoJson: OpenMeteoGeoResponse;
  try {
    geoJson = await geoResponse.json();
  } catch {
    const result: ApiResult<never> = {
      ok: false,
      error: { message: "地點資料解析失敗", code: "PARSE_ERROR" },
    };
    return NextResponse.json(result, { status: 502 });
  }

  if (!geoJson.results || geoJson.results.length === 0) {
    const result: ApiResult<never> = {
      ok: false,
      error: {
        message: `找不到「${city}」，請確認城市名稱是否正確`,
        code: "CITY_NOT_FOUND",
      },
    };
    return NextResponse.json(result, { status: 404 });
  }

  const geoResult = geoJson.results[0];

  // 2. Weather
  let weatherResponse: Response;
  try {
    weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${geoResult.latitude}&longitude=${geoResult.longitude}&current_weather=true`,
    );
  } catch {
    const result: ApiResult<never> = {
      ok: false,
      error: {
        message: "天氣資料取得失敗，請稍後再試",
        code: "UPSTREAM_ERROR",
      },
    };
    return NextResponse.json(result, { status: 502 });
  }

  if (!weatherResponse.ok) {
    const result: ApiResult<never> = {
      ok: false,
      error: { message: "天氣服務異常", code: "UPSTREAM_ERROR" },
    };
    return NextResponse.json(result, { status: 502 });
  }

  let weatherJson: OpenMeteoWeatherResponse;
  try {
    weatherJson = await weatherResponse.json();
  } catch {
    const result: ApiResult<never> = {
      ok: false,
      error: { message: "天氣資料解析失敗", code: "PARSE_ERROR" },
    };
    return NextResponse.json(result, { status: 502 });
  }

  if (!weatherJson.current_weather) {
    const result: ApiResult<never> = {
      ok: false,
      error: { message: "天氣資料不完整", code: "PARSE_ERROR" },
    };
    return NextResponse.json(result, { status: 502 });
  }

  const data: WeatherData = mapOpenMeteoToWeatherData(
    geoResult,
    weatherJson.current_weather,
  );

  const result: ApiResult<WeatherData> = { ok: true, data };
  return NextResponse.json(result, { status: 200 });
}
