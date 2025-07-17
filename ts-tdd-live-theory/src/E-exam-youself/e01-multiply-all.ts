

// const throwIfNaN = <T>(n: T) => {
//     if(Number.isNaN(n)) {
//         throw new Error('Cannot multiply by NaN!')
//     }
//     return n
// }

import { isNumber, multiply } from "./e01-numeric-pipes";



export function multiplyAll(...mabyNumbers: unknown[]) {

    const numbers = mabyNumbers.filter(isNumber)
    return numbers.length ? numbers.reduce(multiply, 1) : 0;
}
