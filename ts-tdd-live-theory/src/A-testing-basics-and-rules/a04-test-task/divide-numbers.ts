function throwIfNaN(num: number) {
    if(Number.isNaN(num)) {
        throw new Error('number cannot be NaN!');
    }
}


export function divideNumbers(a: number | string, b: number | string): number {
    const dividend = Number(a)
    const divider = Number(b)
    throwIfNaN(dividend);
    throwIfNaN(divider);
    if(divider === 0) {
        throw new Error('Cannot divide by 0!');
    }
    return dividend / divider;
}