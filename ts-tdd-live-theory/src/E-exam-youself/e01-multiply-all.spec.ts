/**
 * #e01 Zadanie:
 * Na rozgrzewkę - zadanie jest łatwiejsze...
 *
 * - Napisałem dla ciebie pierwszy test.
 * - Reszta (implementacja i może więcej testów?) należy do Ciebie.
 *
 * Specyfikacja:
 * Napisz funkcję mnożącą wszystkie podane argumenty
 *
 * na przykład podany INPUT: 1 2 3 4 5
 *
 * wykona mnożenie: 1 * 2 * 3 * 4 * 5
 *
 * i zwróci, OUTPUT: 120
 *
 * i tak dalej...
 *
 * Przypadki brzegowe:
 * - nie podano argumentów - OUTPUT: 0
 * - podany argument złego typu np. string — zastosuj "ciche" pominięcie argumentu np.
 *    - INPUT: 1 2 '3'
 *    - OUTPUT: 2
 *
 *    - INPUT: 2 4 true
 *    - OUTPUT: 8
 *
 *    - INPUT: 3 'ok' '2' 2
 *    - OUTPUT: 6
 * 
 * - jeśli jedna z liczb to dokładnie `NaN` - rzuć wyjątek.
 * */

import { multiplyAll } from "./e01-multiply-all";


// Usuń .skip PRZED napisaniem testów

/*
* Robimy podejście TDD.
*
* 🚀|0 - napisz plan testowania....
* 
* 🚀|1st - napisz testy
* 🚀|2nd - zaimplementuj
* 3rd - refactor
* */

describe('multiplyAll', () => {

	beforeEach(() => {
		expect.hasAssertions();
	})

	it.each([
		[[1, 8, 4], 32],
		[[2.3, 2], 4.6],
		[[-200, 2, 4], -1600],
		[[2], 2],
	])('should multiply N given arguments %o result in: %d - for different kinf of numbers [decimal, nagative, positive etc.]', (args: unknown[], expectedResult: number) => {

		const result = multiplyAll(...args);

		expect(result).toBe(expectedResult);
	})

	it('should return 0 if no arguments given', () => {
		
		expect(multiplyAll()).toBe(0);
	})


	it('should return 0 if any of argument is 0', () => {

		const zero = 0;

		expect(multiplyAll(9, 45, 8.9, zero, 2)).toBe(0);
	})


	it.each([
		[[1, '4', 7, 9], 63],
		[[2.3, true, 2], 4.6],
		[[-200, 2, false, 4], -1600],
		[[222, {}], 222],
	])('should silently skip arguments with other than number type %o result in: %d (test boolean false especially)', (args: unknown[], expectedResult: number) => {

		const result = multiplyAll(...args);

		expect(result).toBe(expectedResult);
	})

	it('should NOT cast boolean to (false -> 0) when other then number type', () => {
	
		const result = multiplyAll(7, 9, false);
		// const result2 = multiplyAll(true);

		expect(result).not.toBe(0);
		expect(result).toBe(63);

		// expect(result2).toBe(0)
	})


	it('should return 0 if all of the arguments are different than number (test boolean true especially)', () => {
		const result = multiplyAll('8', {}, true);

		expect(result).toBe(0)
	})


	it('should throw error "Cannot multiply by NaN!" if any of arguments is NaN', () => {


		// console.log(multiplyAll(7, 9, false, NaN));
		expect(() => {
			multiplyAll(7, 9, false, NaN);
		}).toThrowError('Cannot multiply by NaN!')


		expect(() => {
			multiplyAll('8', {}, true, [], NaN);
		}).toThrowError('Cannot multiply by NaN!')
	})


})
