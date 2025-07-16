/**
 *
 * W samym Vitest istnieje wiele tzw. matchers.
 * Co więcej — możesz doinstalować ich jeszcze więcej, z innych bibliotek.
 *
 * Na przykład: matchers dla elementów DOM.
 * @see https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
 * */

describe('ways to assert something with matchers [b003]', () => {

	const PRICE_TAG_HUNDRED = { price: 100, name: 'promotion'};
	const LOWEST_PRICE = PRICE_TAG_HUNDRED;

	it('should PRICE_TAG_HUNDRED be a LOWEST_PRICE', () => {

		// .toBe ===
		expect(PRICE_TAG_HUNDRED).toBe(LOWEST_PRICE);
		// .not.toBe !==
		expect(PRICE_TAG_HUNDRED).not.toBe({price: 100, name: 'promotion'});

		// .toEqual (deep equality field by field)
		expect(PRICE_TAG_HUNDRED).toEqual({price: 100, name: 'promotion'});

		// order of array matters !
		expect([9,2,1]).toEqual([9,2,1]);
		expect([9,2,1]).not.toEqual([9,1,2]);

		// order of fields not !:
		expect(PRICE_TAG_HUNDRED).toEqual({name: 'promotion', price: 100});
	})

	it('should be able to compare STRICT Equality', () => {

		// Consider this works:
		expect( { price: 100, name: 'promotion'}).toEqual({name: 'promotion', price: 100, something: undefined, not: undefined, existing: undefined});

		// .toStrictEqual
		// That will not (if remove .not)
		expect( { price: 100, name: 'promotion'}).not.toStrictEqual({name: 'promotion', price: 100, something: undefined, not: undefined, existing: undefined});
	})

	it('should be able to compare object fields', () => {

		// .toHaveProperty
		expect( { name: 'John', age: 23 }).toHaveProperty('age')
		expect( { name: 'John', age: 23 }).not.toHaveProperty('lastName')

		expect( { name: 'John', age: 23 }).toHaveProperty('name', 'John')

		// Nested objects:
		expect( { name: 'John', age: 23, address: { street: 'LongStreet', no: 32 } }).toHaveProperty(['address', 'street'], 'LongStreet')

	})

	it('should be able to compare numbers', () => {

		//
		expect(10).toBeLessThan(11);
		expect(20).toBeGreaterThan(19);
		expect(20).toBeLessThanOrEqual(20);
		expect(20).toBeGreaterThanOrEqual(20);
		expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
	})

	it('should be able to just check if something exists', () => {

		let hello;
		let goodbye = 'Bye Bye!';

		expect(hello).not.toBeDefined();
		expect(goodbye).toBeDefined();
	})

	it('should return from spy, or being called with ', () => {

		function sayName(name: string, notUsedAge = 18) {
			return 'My name is: ' + name;
		}
		const spySayMyName = vi.fn(sayName);

		spySayMyName('Mark', 22);
		spySayMyName('Elizabeth');

		//
		expect(spySayMyName).toHaveReturned()
		expect(spySayMyName).toHaveReturnedWith('My name is: Mark')
		expect(spySayMyName).toHaveReturnedTimes(2)

		//
		expect(spySayMyName).toHaveBeenCalled()
		expect(spySayMyName).toHaveBeenCalledTimes(2)
		expect(spySayMyName).toHaveBeenCalledWith('Mark', 22)
		expect(spySayMyName).toHaveBeenCalledWith('Elizabeth')

		// bardziej konkretnie:
		expect(spySayMyName).toHaveBeenNthCalledWith(1, 'Mark', 22)
		expect(spySayMyName).toHaveBeenNthCalledWith(2, 'Elizabeth')

	})
})
