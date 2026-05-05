import type { KeyboardEvent } from "react";
import SearchButton from "./SearchButton";
import { FormRow, CityInput } from "./SearchBar.styles";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  isLoading,
}: SearchBarProps) {
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearch(value);
    }
  }

  return (
    <FormRow>
      <CityInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="請輸入地點（如 Taipei）"
        disabled={isLoading}
        aria-label="城市名稱"
      />
      <SearchButton isLoading={isLoading} onClick={() => onSearch(value)} />
    </FormRow>
  );
}
