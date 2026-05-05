import { Temperature } from "./TemperatureDisplay.styles";

interface TemperatureDisplayProps {
  temperature: number;
}

export default function TemperatureDisplay({
  temperature,
}: TemperatureDisplayProps) {
  return (
    <Temperature aria-label={`氣溫 ${temperature.toFixed(1)} 攝氏度`}>
      {temperature.toFixed(1)}°C
    </Temperature>
  );
}
