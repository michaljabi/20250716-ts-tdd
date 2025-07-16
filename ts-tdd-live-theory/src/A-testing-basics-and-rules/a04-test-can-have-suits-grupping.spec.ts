/**
 * OSTRZEŻENIE:
 * - należy zauważyć, że testy tutaj są PUSTE
 * - normalnie należy unikać pisania takich testów, ponieważ istnieje ryzyko wystąpienia "fałszywie pozytywnego" - pustego testu.
 * - później dowiemy się o: expect.assertions(1);
 * - lub o planowaniu testów metodami test.todo / it.todo
 *
 * Ten przykład powinien pokazać, jak podzielić testy w jednym pliku na kilka grup.
 *
 * Dobrze jest mieć jedną GŁÓWNĄ grupę, która wskazuje, co testujesz.
 * W razie potrzeby możesz podzielić tę grupę na mniejsze części.
 *
 * Czasem jest oczywiste, co testujesz i dlaczego, czasem nie, a te "describe"
 * klocki mogą pomóc w wskazaniu, że niektóre grupy testów są:
 * - potrzebne
 * - w jakiś sposób związane z rzeczami, które testują
 * - wymaga podobnej konfiguracji i demontażu (setup / teardown)
 * */

describe('sample test suite [a004]', () => {
	test('can be grouped in so called test suits' , () => {
		/*
		  Po to, aby przypadkowo nie napisać pustego testu,
			Ten celowo się nie powiedzie — gdy usuniesz komentarze z linii poniżej:
		*/
		// expect.hasAssertions()
		// albo:
		// expect.assertions(2);
	})
})


describe('other nested sample test suite [a004]', () => {

	test('can be grouped in so called test suits' , () => {

	})

	describe('suits can have other suits... and so on...', () => {
		test('can be grouped in test suit of test suit...' , () => {

		})

		test('can be many of them', () => {})
	})
});
