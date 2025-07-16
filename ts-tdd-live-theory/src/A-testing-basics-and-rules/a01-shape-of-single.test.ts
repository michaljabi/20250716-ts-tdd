import { test, expect } from 'vitest'

/**
 * UWAGA:
 * - test poniżej jest "niemądry" :), jest tutaj jednak po to, aby pokazać, jak prosto jest uzyskać automatyzację testu;
 * - normalnie, nie robimy tego typu: "testowania czy JavaScript działa".
 *
 * - Czasami zdarza się jednak jeden prosty test (tzw. sanity test),
 * tylko po to, aby upewnić się, że testowanie env działa.
 *
 *
 * Skoncentrujmy się nad tym, jak napisać dobry test dopiero w kolejnych przykładach.
 * */
test('should be simple to test 😊 [a01]' , () => {

	console.log('HELLO!')
	expect(10 + 10 + 10).toEqual(30)
	expect({a: 1, b:2}).toEqual({b:2, a:1});
	expect(10 + 10 + 10).not.toBe(31);

	// .toEqual -> typy obiektowe
	// .toBe -> typy proste
})
