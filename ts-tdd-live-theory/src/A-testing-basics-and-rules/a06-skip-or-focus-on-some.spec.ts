/**
 * Możesz zdecydować, który test ma zostać pominięty w pliku.
 *
 * To pozwala na razie nie skupiać się na jakimś konkretnym teście, bez potrzeby jego usuwania czy komentowania.
 *
 * Należy uważać i unikać pomijania testu, jeśli np. robimy to specjalnie, ponieważ były zielone, ale teraz zmieniają kolor na czerwony,
 * i chcemy pozbyć się ich z wyników testowania całości.
 * Ponieważ jeśli wprowadzasz zmiany w niektórych funkcjonalnościach, które zależą od innych już zbudowanych.
 * Jeśli dopiszesz .skip(, możesz zapomnieć o „cofnięciu pominięcia” testu później, a jeśli nadal byłby czerwony,
 * to powinna to być również informacja zwrotna dla Ciebie, motywacja do naprawy (refaktoryzacji).
 *
 * */

describe('skipping tests [a006]', () => {

	it.skip('this test should be skipped with [test|it].skip', () => {
		expect(10).toBe(20);
	})

	/*
		Testy poniżej, kiedy odkomentowane będą "focused" (whitelisted).
		Oznacza to, że tylko one zostaną wybrane z tego pliku.

		Zależy od Test Runnera — może to być jedyny test z .only lub fit(, który zostanie uruchomiony.
		(nie tylko z pliku, ale globalnie).

		Ta opcja jest bardzo przydatna, gdy wprowadzasz testowanie do projektu, w którym:
		 - jest ich wiele
		 - wygenerowały się początkowo automatycznie (np. projekty @angular/cli) i do tej pory nikt się nimi nie przejmował.
		 - Masz wiele, wiele czerwonych testów i nie chcesz, aby w tej chwili Cię rozpraszały.
	*/

	it.only('should run this test only with using: .only', () => {
	   expect(10).toEqual(10)
	})

	it('this test will not run (because of .only)', () => {
		//expect(1000 + 10).toEqual(10)
	})
})

/*
		[!] Uwaga:
		To samo możesz zrobić dla bloków describe():
		jako: describe.only('', () => {})
		https://vitest.dev/api/#describe-only
		oraz dla skip:
		https://vitest.dev/api/#describe-skip

		Pominie cały blok lub skupi się na całym bloku w zależności od tego, ile masz bloków, w których używasz:
		"skip" albo "only"
 */


describe.skip('this block will not fire due to .skip() ', () => {

	 it('should not be visible', () => {
	 	  const ok = 'Hi';

	 	  expect(ok).toBe('Hi there')
	 })
})
