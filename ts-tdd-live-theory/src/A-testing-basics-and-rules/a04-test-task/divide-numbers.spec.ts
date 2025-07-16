import { divideNumbers } from "./divide-numbers";

// puść test w konsoli żeby zobaczyć pełny raport.


describe("divide-numbers", () => {


  describe("work with stings (a04.4)", () => {
    it.each([
        [-100, '20', -5],
        ['100', 10, 10],
        ['100', '-10', -10],
        ['2', '0.5', 4.0],
    ])("when %d divided by %d it should be %d", (a, b, expectedResult) => {
        const result = divideNumbers(a, b);

        // expect.assertions(1)

        expect(result).toBe(expectedResult);
    });

    it.each([
        { dividend: 'xuxwyw', divider: 34, source: 'dividend'},
        { dividend: 20, divider: 'xuxwyw', source: 'divider'}
    ])("should throw an Exception ('$source cannot be casted to number!') if any of the string ($dividend / $divider) cannot become a valid number", ({dividend, divider, source}) => {  

        expect(() =>  divideNumbers(dividend, divider)).toThrowError(`${source} cannot be casted to number!`);
    });

     it("should throw an Exception ('Cannot divide by 0!') if 0 is a string divider", () => {
            const divider = '0';

            expect(() =>  divideNumbers(100, divider)).toThrowError('Cannot divide by 0!');
    });

  })

  it.each([
    [-5, -100, 20],
    [10, 100, 10],
    [-10, 100, -10],
  ])("should return %i if %i divided by %i", (expectedResult, a, b) => {
    const result = divideNumbers(a, b);

    expect(result).toBe(expectedResult);
  });

  // it("should return 0.33 (rounded to 2 digits after dot) when divide: 1 / 3", () => {
  it("should return 0.3333... when divide: 1 / 3", () => {
    const result = divideNumbers(1, 3);

    // expect(result).toBe(0.33);
    expect(result).toBeCloseTo(0.3333, 4);
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

  it.each([
    { dividend: 100, divider: NaN},
    { dividend: NaN, divider: 23}
  ])("should throw an Exception ('number cannot be NaN!') if any of the number ($dividend / $divider) is NaN", ({dividend, divider}) => {  

    expect(() =>  divideNumbers(dividend, divider)).toThrowError('number cannot be NaN!');
  });

  it("should throw an Exception ('Cannot divide by 0!') if 0 is a divider", () => {
    const divider = 0;

    expect(() =>  divideNumbers(100, divider)).toThrowError('Cannot divide by 0!');
  });
});
