describe('[c008] how to test if something throws an error (seeYaNever) ', () => {

	function seeYaNever() {
		throw new Error('Now you see me..');
	}

	// ŻLE!:
	// To się nie uda, ponieważ „pod maską”
	// tak działają asercje (jeśli się nie powiodą, rzucają błąd)

	/*

		it('should throw an error', () => {
			seeYaNever();
	  })

	 */
	 // Zamiast tego: musisz opakować to wywołanie seeYaNever() inną funkcją

	it('should throw an \'Now you see me..\' error', () => {


		// Powinniśmy wybrać jedną z opcji poniżej:
		expect(() => seeYaNever()).toThrow();
		expect(() => { seeYaNever() }).toThrow();
		expect(() => seeYaNever()).toThrow(Error);
		expect(() => seeYaNever()).toThrow(new Error('Now you see me..'))
		expect(() => seeYaNever()).toThrowError('Now you see me..');
		expect(() => seeYaNever()).toThrowError(/see/);
	})


	describe('redactMessage', () => {

		function redactMessage(message: string | number, keywordsToRemove : string | string[] = []) {
			if(typeof message !== 'string') {
				 throw new Error('Given message must be a string')
			}
			if(!Array.isArray(keywordsToRemove)) {
				 throw new Error('Given keywordsToRemove must be an array')
			}

			let transformed = message;
			for(const word of keywordsToRemove) {
				transformed = transformed.replaceAll(' '+word+' ', '');
			}
			return transformed;
		}


		it('should throw an error if message other than string given', () => {

			expect(() => {
				redactMessage(12375, [])
			}).toThrowError('Given message must be a string')
		})

		it('should throw an error if given keywordsToRemove are not an array', () => {

			expect(() => {
				redactMessage('some hidden secret', 'secret')
			}).toThrowError('Given keywordsToRemove must be an array')
		})

	})

})
