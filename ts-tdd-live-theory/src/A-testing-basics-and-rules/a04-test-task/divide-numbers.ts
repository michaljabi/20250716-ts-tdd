export function divideNumbers(a: number, b: number): number {
    if(Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error('number cannot be NaN!');
    }
    if(b === 0) {
        throw new Error('Cannot divide by 0!');
    }
    return a / b;
    //return Number((a / b).toFixed(2));
}