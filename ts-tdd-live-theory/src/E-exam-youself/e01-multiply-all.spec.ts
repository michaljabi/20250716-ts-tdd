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
 * */

import { multiplyAll } from "./e01-multiply-all";


// Usuń .skip PRZED napisaniem testów

/*
* Robimy podejście TDD.
*
* 1st - napisz testy
* 2nd - zaimplementuj
* 3rd - refactor
* */

describe.skip('multiplyAll', () => {

	beforeEach(() => {
		expect.hasAssertions();
	})

	it('should multiply N given arguments', () => {

		// @ts-ignore
		const result = multiplyAll(2, 3, 9)

		expect(result).toEqual(54)
	})

	it.todo('should return 0 if no arguments given')


})
