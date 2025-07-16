/**
 * Testowanie komponentów polega na testowaniu ich zachowania.
 * W takim razie nie obchodzi mnie, czy używasz Angular / React / Svelte / Vue / Ember
 *
 * naprawdę... w ogóle nie zależy mi na Twojej implementacji
 *
 * Wszystko, co chcę wiedzieć — jak to ma się zachowywać?
 * Kierujemy się koncepcją, że w końcu to Użytkownik wchodzi w interakcję z komponentami
 * ... a użytkownik używa przeglądarki + myszki + klawiatury
 *
 * I tak to powinno być testowane! - Tak jak zrobiłby to użytkownik końcowy...
 *
 * Najlepsza biblioteka z prostymi narzędziami do osiągnięcia to:
 * @zobacz https://testing-library.com/docs/
 *
 * ale tutaj zaczniemy bez niej, aby pokazać podstawową koncepcję testowania komponentów.
 *
 * Poniższa linia jest kluczowa, aby mieć JSDOM w tym module testowym!
 * @vitest-environment jsdom
 * */

// Sample Component:
class Clicker extends HTMLElement {

	 clickerBtn: HTMLButtonElement | null = null;
	 noSpan: HTMLSpanElement | null = null;
	 clicked = 0;

	 constructor () {
		 super();
		 this.innerHTML = `
		    <h3>This is my Clicker</h3>
		    <div>you clicked <span class="no">0</span> times</div>
		    <button class="clickerBtn">Click!</button>
		 `
		 this.noSpan = this.querySelector('.no')
		 this.clickerBtn = this.querySelector('.clickerBtn')
		 this.clickerBtn?.addEventListener('click', () => {
			   this.clicked++;
			   if(this.noSpan) {
			      this.noSpan.textContent = String(this.clicked);
			   }
		 })
	 }
}
customElements.define('my-clicker', Clicker);

describe('[c010] - how to test DOM component? (Clicker)', () => {

	let component: Clicker;

	beforeEach(() => {
		component = new Clicker();
	})

	it('should be able to mount to document DOM:', () => {
		document.body.append(new Clicker());

		const clicker = document.querySelector('my-clicker') as Clicker;
		const h3title = clicker.querySelector('h3') as HTMLHeadElement;

		expect(h3title.textContent).toEqual('This is my Clicker')
	})

	it('should start with counter === 0', () => {
		const counterNo = component.querySelector('.no') as HTMLSpanElement;

		expect(counterNo.textContent).toEqual('0')
	})

	it('should increase counter by one on each button click', () => {
		const counterNo = component.querySelector('.no') as HTMLSpanElement;
		const button = component.querySelector('.clickerBtn') as HTMLButtonElement

		button.click()
		button.click()
		button.click()

		expect(counterNo.textContent).toEqual('3')
	})

})
