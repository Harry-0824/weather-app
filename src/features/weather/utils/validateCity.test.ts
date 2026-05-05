import { describe, it, expect } from "vitest";
import { validateCity } from "./validateCity";

describe("validateCity", () => {
  it("有效城市名稱應回傳 valid: true 與 trimmed value", () => {
    const result = validateCity("Taipei");
    expect(result).toEqual({ valid: true, value: "Taipei" });
  });

  it("前後空白應被 trim", () => {
    const result = validateCity("  Tokyo  ");
    expect(result).toEqual({ valid: true, value: "Tokyo" });
  });

  it("空字串應回傳 valid: false", () => {
    const result = validateCity("");
    expect(result.valid).toBe(false);
    expect(result.error).toBeDefined();
  });

  it("只有空白應回傳 valid: false", () => {
    const result = validateCity("   ");
    expect(result.valid).toBe(false);
    expect(result.error).toBeDefined();
  });

  it("超過 100 字元應回傳 valid: false", () => {
    const longCity = "A".repeat(101);
    const result = validateCity(longCity);
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/100/);
  });

  it("剛好 100 字元應回傳 valid: true", () => {
    const exactCity = "A".repeat(100);
    const result = validateCity(exactCity);
    expect(result.valid).toBe(true);
  });
});
