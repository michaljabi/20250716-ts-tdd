export const multiply = (a: number, b: number): number => a * b;
export const throwIfNaN = <T>(n: T) => {
  if (Number.isNaN(n)) {
    throw new Error("Cannot multiply by NaN!");
  }
  return n;
};
export const isNumber = (n: unknown): n is number => typeof throwIfNaN(n) === "number";

