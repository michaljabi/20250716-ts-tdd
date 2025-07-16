/**
 * @see https://vitest.dev/guide/mocking.html#timers
 * */

describe('[c004] - how to test The Async things?', () => {

	describe('timers - for makeMoneyRefund', () => {

		function makeMoneyRefund(cb: (time: number) => void) {
			setTimeout(() => {
				cb(300)
			}, 10000)
		}

		beforeAll(() => {
			vi.useFakeTimers();
		})

		it('should make refund after 10 seconds', () => {

			const myCallback = vi.fn();

			makeMoneyRefund(myCallback)
			// Fake 10 seconds pass....
			vi.advanceTimersByTime(10000)

			expect(myCallback).toHaveBeenCalledWith(300)
		})

		it('should make refund after no matter how many seconds...', () => {

			const myCallback = vi.fn();

			makeMoneyRefund(myCallback)
			// Fake All timers pass....
			vi.runAllTimers();

			expect(myCallback).toHaveBeenCalledWith(300)
		})
	})

	describe('promises - for sendTheEmail', () => {

		function sendTheEmail(to: string, title: string) {
			return new Promise(resolve => resolve({from: 'unknown@example.com', to, title}))
		}

		it('should resolve promise - option (1) return promise and .then() / .catch()', () => {
			return sendTheEmail('mark@example.com', 'New Year is coming!').then((envelope) => {
				expect(envelope).toEqual({
					from: 'unknown@example.com',
					to: 'mark@example.com',
					title: 'New Year is coming!'
				})
			})
		})

		it('should resolve promise - option (2) expect().resolves /  .rejects', () => {
			return expect(sendTheEmail('mark@example.com', 'New Year is coming!')).resolves.toEqual({
					from: 'unknown@example.com',
					to: 'mark@example.com',
					title: 'New Year is coming!'
				})
		})

		it('should resolve promise - option (3) done callback function', () => {
			// good to mark, you expect 1 assertion (to don't forget to assert!)
			expect.assertions(1);
			return sendTheEmail('shaun@example.com', 'New Year!').then((envelope) => {
				expect(envelope).toEqual({
					from: 'unknown@example.com',
					to: 'shaun@example.com',
					title: 'New Year!'
				})
			})
		})

		it('should resolve promise - option (4) async - await', async () => {

			const envelope =  await sendTheEmail('anna@example.com', 'New!');

			expect(envelope).toEqual({
				from: 'unknown@example.com',
				to: 'anna@example.com',
				title: 'New!'
			})
		})


		it('should resolve promise - option (5) async - await combined', async () => {

			await expect(sendTheEmail('joanna@example.com', 'Wow!?')).resolves.toEqual({
				from: 'unknown@example.com',
				to: 'joanna@example.com',
				title: 'Wow!?'
			})
		})
	})
})
