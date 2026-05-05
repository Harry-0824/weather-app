import type { WeatherStatus } from "../types/weather";
import { Icon } from "./WeatherIcon.styles";

const STATUS_EMOJI: Record<WeatherStatus, string> = {
  clear: "☀️",
  cloudy: "☁️",
  rainy: "🌧️",
  snowy: "❄️",
  stormy: "⛈️",
  foggy: "🌫️",
  unknown: "🌡️",
};

const STATUS_LABEL: Record<WeatherStatus, string> = {
  clear: "晴天",
  cloudy: "多雲",
  rainy: "雨天",
  snowy: "雪天",
  stormy: "雷雨",
  foggy: "霧",
  unknown: "未知",
};

interface WeatherIconProps {
  status: WeatherStatus;
}

export default function WeatherIcon({ status }: WeatherIconProps) {
  return (
    <Icon role="img" aria-label={STATUS_LABEL[status]}>
      {STATUS_EMOJI[status]}
    </Icon>
  );
}
