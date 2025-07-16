/**
 * Test można napisać w sposób „behawioralny”.
 *
 * Następnie funkcja „test” zmieni się na „to”
 *
 * i możesz to przeczytać tak:
 * to powinno....
 * it should....
 *
 * np.:
 * - to powinno podzielić wynik przez 3
 * - to powinno po kliknięciu przycisku „Gotowe” pokazać „OK”.
 * - to powinno rzucić błąd "Wrong Type", gdy podano inny niż number argument wejściowy
 *
 * Poniżej znajduje się przykład „z prawdziwego życia”.
 * Wyjaśniasz, co powinno się wydarzyć, a czasem wyjaśniasz, kiedy.
 * */
function mySuperFunction(word?: string) {
	  return word ? 'something' : 'nothing';
}

describe('mySuperFunction [a005]', () => {

	it('should return "nothing" when no arguments given', () => {
		const result = mySuperFunction();

		expect(result).toBe('nothing')
	})

	it('should return "something" when truthy argument given', () => {
		const truthyArg = 'some-test';

		const result = mySuperFunction(truthyArg);

		expect(result).toBe('something')
	})
})
