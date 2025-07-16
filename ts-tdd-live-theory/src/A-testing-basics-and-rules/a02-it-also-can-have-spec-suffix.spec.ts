/**
 * To jest bardziej przykład "z prawdziwego życia",
 * gdzie testujesz coś, co pochodzi z zewnętrznego zakresu funkcji "test".
 *
 * Możesz też sobie wyobrazić, że jeszcze bardziej „prawdziwy” przykład będzie, gdy zaimportujemy to:
 * "outerScopedGreetings" do tego pliku, z osobnej lokalizacji (inny moduł / plik).
 * */

function outerScopedGreetings(name: string): string {
	return 'Greetings ' + name;
}

test('second simple test [a002]' , () => {

	 const greet = outerScopedGreetings('Mike');

	 expect(greet).toEqual('Greetings Mike');
})
