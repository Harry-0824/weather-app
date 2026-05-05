import { City } from "./CityLabel.styles";

interface CityLabelProps {
  city: string;
}

export default function CityLabel({ city }: CityLabelProps) {
  return <City>{city}</City>;
}
