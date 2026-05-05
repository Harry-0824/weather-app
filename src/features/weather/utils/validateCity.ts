const MAX_CITY_LENGTH = 100;

export interface CityValidationResult {
  valid: boolean;
  value: string;
  error?: string;
}

export function validateCity(input: string): CityValidationResult {
  const trimmed = input.trim();

  if (!trimmed) {
    return { valid: false, value: trimmed, error: "請輸入城市名稱" };
  }

  if (trimmed.length > MAX_CITY_LENGTH) {
    return {
      valid: false,
      value: trimmed,
      error: `城市名稱不可超過 ${MAX_CITY_LENGTH} 個字元`,
    };
  }

  return { valid: true, value: trimmed };
}
