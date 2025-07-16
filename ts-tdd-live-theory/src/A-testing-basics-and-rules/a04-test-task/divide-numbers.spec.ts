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
    // throw new Error('Not a number !')

    expect(result).toBe(0);
  });

  it("should throw an Exception ('number cannot be NaN!') if any of the number is NaN", () => {  

    expect(() =>  divideNumbers(100, NaN)).toThrowError('number cannot be NaN!');
    expect(() =>  divideNumbers(NaN, 90)).toThrowError('number cannot be NaN!');
  });

  it("should throw an Exception ('Cannot divide by 0!') if 0 is a divider", () => {
    const divider = 0;

    expect(() =>  divideNumbers(100, divider)).toThrowError('Cannot divide by 0!');
  });
});
