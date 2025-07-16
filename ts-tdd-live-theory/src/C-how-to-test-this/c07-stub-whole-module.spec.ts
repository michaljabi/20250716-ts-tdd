/**
 * Podobnie jak c05, możemy "zalepiać" (stub) moduły.
 *
 * Rozważ przykład, w którym zawsze dostajemy aktualny czas (hh:mm:ss)
 *
 * Jednak nie mamy żadnej zewnętrznej zależności `shoutBannerFor`.
 * Pobiera on logikę działania time() z innego modułu.
 *
 * W tym przykładzie — nie zmieniajmy tej implementacji, dalej próbując przetestować ten kod.
 * */

vi.mock('./c07-time-module', () => ({
	// mock'ujemy implementację .time():
	time: vi.fn(() => '11:02:56')
}));
import { shoutBannerFor } from './c07-to-test-module'

describe('[c007] - how to stub any module', () => {

	it('should present banner with proper text', () => {
		const product = 'tomatoes';
		const price = .99;

		const banner = shoutBannerFor(product, price)

		// Możemy do tego użyć tylko toMatch, prawda?
		// Zmienia się tylko czas — więc to zadziała:
		expect(banner).toMatch(/Welcome, today's (.*) promotion is: tomatoes for 0.99/)

		// Jednak nie mamy w ten sposób możliwości sprawdzenia całości danych generowanych przez shoutBannerFor!
	})

	// A co jeśli chcemy mockować implementację .time() i zobaczyć cały ciąg znaków?
	it('should present banner with proper text', () => {
		const product = 'bananas';
		const price = 2.65;

		const banner = shoutBannerFor(product, price)

		expect(banner).toBe('Welcome, today\'s (11:02:56) promotion is: bananas for 2.65')
	})


	// Możemy zmieniać implementacje mocka dla każdego testu, co jest świetne.
	// Jednak musisz uważać na kolejność testów lub umieścić beforeEach()
	// aby zapewnić implementację dla każdego testu.
	it('should be able to mock some other value for other test', async () => {

		const { time } = await import('./c07-time-module')
		// @ts-ignore
		time.mockImplementation(() => '08:23:11')

		const product = 'bananas';
		const price = 2.65;

		const banner = shoutBannerFor(product, price)

		expect(banner).toBe('Welcome, today\'s (08:23:11) promotion is: bananas for 2.65')
	})
})
