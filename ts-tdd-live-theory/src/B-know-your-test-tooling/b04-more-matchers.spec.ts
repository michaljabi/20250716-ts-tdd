/**
 *  Vitest pozwala na używanie własnych matchers.
 *  https://vitest.dev/guide/extending-matchers.html#extending-matchers
 *
 *  expect() można rozszerzyć o własną implementację i nazwę.
 *  Zobacz składnię:
 *
 *    matcherName(received,...expected) => {message: () => string, pass: boolean}
 *
 *  Zróbmy przykładowego matcher'a, aby sprawdzić, czy jakiś tekst ma emotikon, czy nie.
 *   Napisane w składni:
 *
 *  :smile:
 *
 *
 * Możesz znaleźć więcej matchers, tak aby rozszerzyć swoją aplikację, sprawdź jest-awesome, #Matchers:
 * @see https://github.com/jest-community/awesome-jest#matchers
 * Te matcher'y są pod framework `jest` ale można je łatwo zintegrować z vitest:
 * @see https://vitest.dev/guide/extending-matchers.html
 * Najlepiej obrazuje to przykład z `jest-dom` matchers (zobacz jeszcze 2 linki na samym dole komentarza)
 * @see https://github.com/testing-library/jest-dom/issues/439
 *
 * Pamiętaj tylko o 'zasadzie czytelności' i jeśli dodajesz inne matchers — skonsultuj się z członkami swojego zespołu.
 * Wszyscy deweloperzy pracujący nad projektem w podejściu TDD — powinni wiedzieć, jakich matcher'ów mogą i kiedy je używać.
 *
 * W rzeczywistości, na przykład przy aplikacji front-endowej, najbardziej użyteczne są dopasowania typu jest-dom,
 * matchers dla węzłów/elementów drzewa DOM.
 *
 * @see https://github.com/testing-library/jest-dom
 * @see https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
 * */

expect.extend({
	toHaveEmoji(received: string, name: string)  {
		const check = received.includes(':' + name + ':');
		if(check) {
			return {
				message: () => `expected "${received}" not to have emoji: :${name}: !`,
				pass: true
			}
		}
		return {
			message: () => `expected "${received}" to have emoji: :${name}: !`,
			pass: false
		}
	}
})

describe('more matchers [b004]', () => {

	it('should have text emoji :smile: ', () => {

		expect('hello world :smile:').toHaveEmoji('smile');
	})

	it('should not have text emoji :muscle: ', () => {

		expect('hello world :smile:').not.toHaveEmoji('muscle');
	})
})
