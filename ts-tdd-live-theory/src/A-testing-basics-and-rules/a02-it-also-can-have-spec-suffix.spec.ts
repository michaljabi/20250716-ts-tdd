/**
 * To jest bardziej przykład "z prawdziwego życia",
 * gdzie testujesz coś, co pochodzi z zewnętrznego zakresu funkcji "test".
 *
 * Możesz też sobie wyobrazić, że jeszcze bardziej „prawdziwy” przykład będzie, gdy zaimportujemy to:
 * "outerScopedGreetings" do tego pliku, z osobnej lokalizacji (inny moduł / plik).
 * */

function outerScopedGreetings(name: string): string {
	return `Greetings ${name}`;
}

test('second simple test [a002] {RPS-001}' , () => {

	 const greet = outerScopedGreetings('Mike');

	 expect(greet, 'Should be Mike! {RPS-012}').toContain('Mike');
})



test('should be "Greetings Barbara" if name is Barbara' , () => {

	const name = "Barbara";

	const greet = outerScopedGreetings(name);

	expect(greet).toEqual('Greetings Barbara');
})