import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { GET } from "./route";
import { NextRequest } from "next/server";

function makeRequest(city?: string): NextRequest {
  const url = city
    ? `http://localhost/api/weather?city=${encodeURIComponent(city)}`
    : "http://localhost/api/weather";
  return new NextRequest(url);
}

describe("GET /api/weather", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("缺少 city 參數應回傳 400", async () => {
    const response = await GET(makeRequest());
    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.ok).toBe(false);
    expect(json.error.code).toBe("INVALID_INPUT");
  });

  it("geocoding 查無結果應回傳 404", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify({ results: [] }), { status: 200 }),
    );

    const response = await GET(makeRequest("NonExistentXYZ"));
    expect(response.status).toBe(404);
    const json = await response.json();
    expect(json.ok).toBe(false);
    expect(json.error.code).toBe("CITY_NOT_FOUND");
  });

  it("geocoding 服務失敗應回傳 502", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response("Internal Server Error", { status: 500 }),
    );

    const response = await GET(makeRequest("Taipei"));
    expect(response.status).toBe(502);
    const json = await response.json();
    expect(json.ok).toBe(false);
    expect(json.error.code).toBe("UPSTREAM_ERROR");
  });

  it("正常查詢應回傳 200 與 WeatherData", async () => {
    const geoPayload = {
      results: [
        {
          name: "Taipei",
          country: "Taiwan",
          latitude: 25.05,
          longitude: 121.53,
        },
      ],
    };
    const weatherPayload = {
      current_weather: {
        temperature: 28.5,
        weathercode: 0,
        windspeed: 10,
        time: "2026-05-05T12:00",
      },
    };

    vi.mocked(fetch)
      .mockResolvedValueOnce(
        new Response(JSON.stringify(geoPayload), { status: 200 }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify(weatherPayload), { status: 200 }),
      );

    const response = await GET(makeRequest("Taipei"));
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.ok).toBe(true);
    expect(json.data.city).toBe("Taipei, Taiwan");
    expect(json.data.temperature).toBe(28.5);
    expect(json.data.status).toBe("clear");
  });

  it("weather API 失敗應回傳 502", async () => {
    const geoPayload = {
      results: [
        {
          name: "Taipei",
          country: "Taiwan",
          latitude: 25.05,
          longitude: 121.53,
        },
      ],
    };

    vi.mocked(fetch)
      .mockResolvedValueOnce(
        new Response(JSON.stringify(geoPayload), { status: 200 }),
      )
      .mockResolvedValueOnce(
        new Response("Service Unavailable", { status: 503 }),
      );

    const response = await GET(makeRequest("Taipei"));
    expect(response.status).toBe(502);
  });
});
