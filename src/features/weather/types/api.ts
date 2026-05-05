export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { message: string; code?: string } };

export type WeatherErrorCode =
  | "INVALID_INPUT"
  | "CITY_NOT_FOUND"
  | "UPSTREAM_ERROR"
  | "PARSE_ERROR"
  | "NETWORK_ERROR"
  | "UNKNOWN";
