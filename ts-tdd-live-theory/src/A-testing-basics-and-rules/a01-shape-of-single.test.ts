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

	expect(10 + 10 + 10).toBe(30);
})
