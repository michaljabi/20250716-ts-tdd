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
* 1st - napisz testy
* 2nd - zaimplementuj
* 3rd - refactor
* */

describe('multiplyAll', () => {

	beforeEach(() => {
		expect.hasAssertions();
	})

	it.each([

	])('should multiply N given arguments %o result in: %d - for different kinf of numbers [decimal, nagative, positive etc.]', () => {

		
	})

	it.todo('should return 0 if no arguments given', () => {})


	it.todo('should return 0 if any of argument is 0', () => {})


	it.each([

	])('should silently skip arguments with other than number type (test boolean especially)', () => {

	})

	it.todo('should NOT cast boolean to (false -> 0 | true -> 1) when other then number type', () => {})
	

	it.todo('should return 0 if all of the arguments are different than number', () => {})


	it.todo('should throw error "Cannot multiply by NaN!" if any of arguments is NaN')


})
