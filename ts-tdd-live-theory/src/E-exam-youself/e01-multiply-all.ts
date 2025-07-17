export function multiplyAll(...mabyNumbers:  unknown[]) {

    if(!mabyNumbers.length) {
        return 0;
    }
    let result = 1;
    let hasNumbers = false;
    for(const num of mabyNumbers) {
        if(Number.isNaN(num)) {
            throw new Error('Cannot multiply by NaN!')
        }
        if(typeof num === 'number') {
            result *= num;
            hasNumbers = true;
        }
    }
    return hasNumbers ? result : 0;
}
