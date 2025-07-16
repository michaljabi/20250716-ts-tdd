import { divideNumbers } from "./divide-numbers";

describe("divide-numbers", () => {
  it("should return 10 if 100 is divided by 10", () => {
    const result = divideNumbers(100, 10);

    expect(result).toBe(10);
  });

  // it("should return 0.33 (rounded to 2 digits after dot) when divide: 1 / 3", () => {
  it("should return 0.3333... when divide: 1 / 3", () => {
    const result = divideNumbers(1, 3);

    // expect(result).toBe(0.33);
    expect(result).toBeCloseTo(0.3333, 4);
  });

  it("should return -5 if -100 divided by 20", () => {
    const result = divideNumbers(-100, 20);

    expect(result).toBe(-5);
  });

  it("should not return 30 if 30 / 1.1", () => {
    const result = divideNumbers(30,  1.1);

    expect(result).not.toBe(30);
  });

  it("should return 0 when 0 divided by other number", () => {
    const dividend = 0;

    const result = divideNumbers(dividend, 90);

    expect(result).toBe(0);
  });

  it("should return NaN if any of the number is NaN", () => {
    const result = divideNumbers(100, NaN);
    const result2 = divideNumbers(NaN, 90);
      
    expect(result).toBeNaN();
    expect(result2).toBe(NaN);
  });

  it("should return NaN if 0 is a divider", () => {
    const divider = 0;

    const result = divideNumbers(100, divider);

    expect(result).toBe(NaN);
  });
});
