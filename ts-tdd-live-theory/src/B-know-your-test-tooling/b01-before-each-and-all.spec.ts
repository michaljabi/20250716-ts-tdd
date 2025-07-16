/**
 * PAMIĘTAJ:
 *
 * - dobre testy są od siebie niezależne!
 * - powinny być w stanie działać w losowej kolejności, dając takie same wyniki
 *
 * dlatego bloki takie jak beforeAll i beforeEach / afterAll i afterEach mogą być bardzo przydatne.
 * np. masz w aplikacji moduł singletona, przed każdym testem chcesz go wyczyścić.
 * Mieć ten sam „punkt wyjścia” dla wszystkich testów.
 * */
describe('beforeEach and beforeAll block [b001]', () => {

	let initialValue = 100;
	let someRestartableValue = '!';

	beforeAll(() => {
		initialValue = 2000;
	})

	beforeEach(() => {
		someRestartableValue = '😃';
	})

	it('should be init before all test', () => {

		initialValue++;
		/*
		* Teraz nie wiemy, czy wartość początkowa to 2001, czy 2002
		* Dwa testy (ten i test poniżej zwiększają tę wartość)
		* Testy mogą być uruchamiane w różnej kolejności (i na tym polega ich wzajemna niezależność!)
		* */

		expect(initialValue).toBeGreaterThan(2000);
	})

	it('should be init before all test 2', () => {

		initialValue++;

		expect(initialValue).toBeGreaterThan(2000);
	})

	describe('someRestartableValue', () => {

		/*
		* Poniżej mamy dowód, że: someRestartableValue
		* zawsze będzie = 😃, gdy rozpoczyna się test.
		*
		*
		* beforeEach()
		* To nasza gwarancja rozpoczęcia z tymi samymi wartościami początkowymi
		* */

		  it('should be always 😃 on start', () => {

		  	expect(someRestartableValue).toBe('😃')

			  someRestartableValue = 'TROLL';

			  expect(someRestartableValue).toBe('TROLL')
		  })

			it('should be always 😃 on start - example 2', () => {
				expect(someRestartableValue).toBe('😃');
				someRestartableValue = 'CHANGED !';
			})

			it('should be always 😃 on start - example 3', () => {
				expect(someRestartableValue).toBe('😃');
				someRestartableValue = 'NEW !';
			})

			it('should be always 😃 on start - example 4', () => {
				expect(someRestartableValue).toBe('😃');
				someRestartableValue = 'COme ON !';
			})
	})
})
