import type { WeatherData } from "../types/weather";
import WeatherIcon from "./WeatherIcon";
import TemperatureDisplay from "./TemperatureDisplay";
import CityLabel from "./CityLabel";
import { Card, Details, Condition } from "./WeatherResultCard.styles";

interface WeatherResultCardProps {
  data: WeatherData;
}

export default function WeatherResultCard({ data }: WeatherResultCardProps) {
  return (
    <Card aria-label="目前天氣結果">
      <WeatherIcon status={data.status} />
      <TemperatureDisplay temperature={data.temperature} />
      <Details>
        <CityLabel city={data.city} />
        <Condition>{data.description}</Condition>
      </Details>
    </Card>
  );
}
