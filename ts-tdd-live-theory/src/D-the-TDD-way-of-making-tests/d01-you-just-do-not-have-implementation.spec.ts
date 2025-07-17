/**
 * OK, zacznijmy prosto... wewnątrz tego pliku, używając zakresów.
 *
 * Wiesz, w Test Driven Development — najpierw piszemy test.
 *
 * Ok, ale test czego?
 * - cóż, o to chodzi, zamiast "zacznij wdrażać"
 * - przechodzimy do: „zacznij pisać coś, co potwierdza mój sposób realizacji”
 *
 * - więc ?
 * - więc robisz to, co robiłeś do tej pory w przypadku tworzenia oprogramowania...
 * a) Specyfikacja/Model
 * b) Plan
 * c) Opracuj / Napisz kod implementacji
 * d) Test
 *
 * Rzecz, która się zmienia, to d) Część testowa.
 * Po pierwsze, pojawia się przed częścią Opracuj / Napisz kod implementacji.
 * Po drugie, jest ZAUTOMATYZOWANE - nie trzeba "odpalać" swojej logiki i console.log wszystkiego 😅.
 *
 * Sposób TDD:
 * a) Specyfikacja/Model
 * b) Plan
 * c) Napisz kod do testu / Test jednostkowy
 * d) Opracuj / Napisz kod implementacji
 * e) Refaktoryzacja / Optymalizacja rozwiązania
 *
 *
 *
 * W takim razie MUSIMY WIEDZIEĆ, co musimy opracować, zanim zaczniemy robić testy.
 *
 * Najpierw zróbmy super prosty przykład.
 * pokażę Ci, co dokładnie będziesz musiał wdrożyć,
 * i pokaż przykładowy test do wdrożenia.
 *
 * - W naszym systemie musimy mieć funkcję dekoratora, aby wziąć dowolny obiekt i dodać "zawód"
 * - Ta funkcja musi zachowywać się tak:
 * -> Obiekt dostarczony do tej funkcji nie powinien być mutowany
 * -> Funkcja powinna zwrócić obiekt z właściwością „profession” i wartością
 * -> Zarówno wartość profesji, jak i obiekt będą przekazane do funkcji
 * -> Jeśli nie podano, zawód jest "unknown"
 *
 * Spójrz, testy są jak "dokumentacja zachowania"!
 * Aby rozpocząć: usuń część .skip
 * */




interface User {
	name: string;
	profession: string;
	// profession?: 'programmer' | 'barber' | 'seller';
}

function userFixture(name: string = 'John'): User {
	// jeśli `proffesion` nie jest opcjonalne to:

	// return { name, profession: '' } rozwiązanie 1, stub dla wartości które muszą być a ich nie potrzebujemy
	return { name } as User; // rozwiązanie 2 to asercja typu (oszukujemy TS);
}


describe('attachProfession [d01]', () => {



	function attachProfession(user: User, profession: User['profession'] = 'unknown'): User {
		return {...user, profession }
	}

	// #Zadania:

	// Mocks:
		// - 

	// 1. Czy możesz uprościć przygotowanie `Given` ?
	// 2. Czy możesz mnie zaimplementować?

	let user: User;

	beforeEach(() => {
		// ryzykowne podejście, ale możemy go użyć jeśli potrzebny jest nam `STUB` i nie interesuje nas sam obiekt user.
		// jedynie funkcjonalność dodawania zawodu.
		user = {} as User;
	})


	it('should attach profession to given object (aternative version - testing only profession field)', () => {
		 // const user = userFixture();
		 const myProfession = 'programmer'

		 const decoratedUser = attachProfession(user, myProfession);

		 expect(decoratedUser).toHaveProperty('profession', myProfession)
		 // expect(decoratedUser).toHaveProperty('profession', 'programmer')
	})


	it('should attach profession to given object', () => {
		 const user = userFixture();
		 const profession = 'programmer'

		 const decoratedUser = attachProfession(user, profession);

		 expect(decoratedUser).toEqual({name: 'John', profession: 'programmer'})
	})

	it('should not mutate given object at all', () => {
		const user = userFixture('Jane');
		const profession = 'accountant'

		const decoratedUser = attachProfession(user, profession);

		expect(user).not.toBe(decoratedUser)
		expect(user).toEqual({name: 'Jane'})
	})

	it('should decorate with profession = unknown if no profession given', () => {
		const user = userFixture('Richard'); // {name: 'Richard'};

		const decoratedUser = attachProfession(user);

		expect(decoratedUser).toStrictEqual({name: 'Richard', profession: 'unknown'})
	})

})


// Musiałem to dodać ze względu na TS (chodzi o modułowość ESM / heretyczność)
export {};