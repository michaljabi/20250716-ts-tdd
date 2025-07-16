/**
 * Rozważ ten prosty przykład.
 *
 * Pokazuje ogólne podejście do testowania wielu przypadków użycia Twojego SUD (System Under Test).
 *
 * Jako programiści często szukamy możliwie najkrótszego i najłatwiejszego rozwiązania.
 * Unikanie powtórzeń i ponowne używanie konstrukcji z kodu.
 *
 * Takie podejście wydaje się być dobre przy testach - ale tutaj - musimy zadbać o:
 * - czytelność
 * - jasne zrozumienie tego, co się dzieje.
 *
 * Czasem zrobienie czegoś w jednym miejscu i zakrycie go tylko na 3-4 testy, zmniejsza czytelność
 * a jeśli w teście dostaliśmy jakiś zagadkowy kod - nie wiemy, co tak naprawdę testuje deweloper.
 * Robienie skrótów polegających na testowaniu kilku rzeczy w jednym teście - też nie jest dobrym rozwiązaniem.
 *
 * */

function carFactory(engine: number, model: string, manufacturer = 'BMW') {
	return {
		engine,
		model,
		manufacturer
	}
}


describe('carFactory [a008]', () => {

	// [WRONG !]
	// Kuszące może być przetestowanie wszystkich przypadków jednocześnie::
	it('should create a new Car model, when properties given', () => {

		const myCar = carFactory(2.2, 'A8', 'Audi');

		expect(myCar).toStrictEqual({engine: 2.2, manufacturer: 'Audi', model: 'A8'})

		const myCar2 = carFactory(4.4, 'X7')

		expect(myCar2).toStrictEqual({manufacturer: 'BMW', engine: 4.4, model: 'X7'})
	})

	// LEPSZE PODEJŚCIE:
	// Pokaż swoje intencje, rozbijając zagadnienie na 2 przypadki testowe:
	it('should create a new Car model, when all properties given', () => {

		const myCar = carFactory(2.2, 'C238', 'Mercedes');

		expect(myCar).toStrictEqual({engine: 2.2, manufacturer: 'Mercedes', model: 'C238'})
	})

	// Ten test, mimo że jest bardzo opisowy, zapewnia większą „czytelność” i przejrzystość
	// Widzimy, co dokładnie deweloper chciał przetestować.
	it('should make default manufacturer to BMW when only engine capacity and model given', () => {
		// GIVEN:
		const engineCapacity = 4.4;
		const model = 'X7';
		// WHEN:
		const myCar2 = carFactory(engineCapacity, model)
		// THEN:
		expect(myCar2).toStrictEqual({manufacturer: 'BMW', engine: 4.4, model: 'X7'})
	})
})
