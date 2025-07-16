/**
 * OK. Skupmy się na tym, JAK powinniśmy pisać nasze testy.
 * lepsze podejście niż a001 😊.
 *
 * Co jest ważne?
 *
 * Cóż, NAZWA testu — musi wyrażać to, co chcesz przetestować.
 * Spróbuj odpowiedzieć, co testujesz, a czasem nawet – dlaczego to robisz.
 *
 * STRUKTURA testu powinna wyglądać następująco: 3x A = Arrange, Act, Assert
 * Nie musisz dawać komentarzy jak poniżej (która część jest którą) - tutaj służy to tylko pokazaniu, jak ma to wyglądać
 * Należy jednak trzymać się tego stylu struktury (GWT Given/When/Then) wszędzie tam, gdzie to możliwe.
 *
 * Daje czytelność i skupienie na poszczególnych częściach testu.
 *
 * ASSERT — staraj się tworzyć jak najmniej asercji podczas testu.
 * Czasami lepiej jest podzielić to, co testujesz, na 2 przypadki testowe, zamiast robić to w jednym, z wieloma asercjami.
 * Omówimy to szerzej w następnych przykładach, ale pamiętaj o tym.
 * Lepiej jest również używać asercji .toEqual() / .toBe() tak długo, jak to możliwe, aby po prostu zachować prostotę!
 *
 * */

test('should result 30 when 10 added to 20 - [a003]' , () => {
	// Arrange / Given
	const numberA = 10;
	const numberB = 20;
	// Act / When
	const result = numberA + numberB;
	// Assert / Then
	expect(result).toBe(30);
})
