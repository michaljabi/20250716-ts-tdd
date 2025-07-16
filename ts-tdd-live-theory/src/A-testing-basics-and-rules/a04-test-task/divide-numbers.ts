function throwIfNaN(num: number) {
    if(Number.isNaN(num)) {
        throw new Error('number cannot be NaN!');
    }
}

function throwIfCannotCast(num: number | string, source: 'dividend' | 'divider') {
    if(typeof num !== 'number' && Number.isNaN(Number(num))) {
        throw new Error(`${source} cannot be casted to number!`);
    }
}


export function divideNumbers(a: number | string, b: number | string): number {
    throwIfCannotCast(a, 'dividend');
    throwIfCannotCast(b, 'divider');

    const dividend = Number(a)
    const divider = Number(b)
    throwIfNaN(dividend);
    throwIfNaN(divider);
    if(divider === 0) {
        throw new Error('Cannot divide by 0!');
    }
    return dividend / divider;
}