export type WeatherStatus =
  | "clear"
  | "cloudy"
  | "rainy"
  | "snowy"
  | "stormy"
  | "foggy"
  | "unknown";

export interface WeatherData {
  city: string;
  temperature: number;
  status: WeatherStatus;
  description: string;
  updatedAt: string;
}

export interface WeatherSearchState {
  query: string;
  isLoading: boolean;
  error: string | null;
  data: WeatherData | null;
  hasSearched: boolean;
}
