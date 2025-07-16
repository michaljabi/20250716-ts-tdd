/**
 *
 * Używamy Fake DOM:
 * @vitest-environment jsdom
 */

describe('[c002] - how to test The Callback Function? (DOM button + callMyFriend)', () => {

	describe('callMyFriend', () => {

		function callMyFriend(voiceMail: (text: string) => void) {
			voiceMail('Please record the message, after signal');
			voiceMail('beep')
		}

		it('should return please, record the message from spy', () => {

			const voiceMailSpy = vi.fn();

			callMyFriend(voiceMailSpy);

			expect(voiceMailSpy).toHaveBeenCalledTimes(2);
			expect(voiceMailSpy).toHaveBeenNthCalledWith(1, 'Please record the message, after signal')
			expect(voiceMailSpy).toHaveBeenNthCalledWith(2, 'beep')
		})

	})

	describe('DOM button', () => {

		function makeDOMOrderButton({onClick} : { onClick(action: string): void } ) {
			const button = document.createElement('button');
			button.textContent = 'Confirm Order';
			button.addEventListener('click', () => {
				onClick('Ordered pizza with peperoni')
			});
			return button;
		}

		it('should return Peperoni Pizza in callback after clicked', () => {
			const onClickSpy = vi.fn();
			const orderButton = makeDOMOrderButton({onClick: onClickSpy});

			// Simulate actual click:
			orderButton.click();

			expect(onClickSpy).toHaveBeenCalledWith('Ordered pizza with peperoni');
		})
	})


})
