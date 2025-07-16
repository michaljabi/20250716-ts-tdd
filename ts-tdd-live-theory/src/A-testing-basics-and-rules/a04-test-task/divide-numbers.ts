export function divideNumbers(a: number, b: number): number {
    if(b === 0) {
        return NaN;
    }
    return a / b;
    //return Number((a / b).toFixed(2));
}