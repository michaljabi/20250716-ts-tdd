/**
 * OK, to nadal pozostanie proste.
 * Skupiamy się na jakiejś wybranej funkcjonalności, a nie na całym systemie.
 *
 * Jednak na razie powinieneś to dostrzec:
 *
 * - CZERWONY: test
 * - ZIELONY: wdrożenie
 * - REFACTOR: optymalizacja / samodzielny przegląd kodu
 *
 * Teraz mamy plan testów, jednak nie napisano implementacji działania ani testów...
 * Wygląda prawie jak punkt startowy.
 * Jednak z już podanym planem.
 *
 * Wyobraź sobie takie zadanie:
 *
 * Stwórz funkcję „jazdy samochodem”.
 *
 * Wymagania:
 * - aut może być wiele.
 * - każdy samochód posiada automatyczną skrzynię biegów.
 * - skrzynia powinna mieć 5 biegów od 1 do 5 w zależności od prędkości, jaką chcesz osiągnąć w aucie.
 * - można zmieniać biegi pojedynczo (jeden-po-drugim), ale można je natychmiast przełączyć z 1 na 5 biegów -> 1,2,3,4,5
 * - samochód może przyspieszać w górę lub zwolnić w dół o dowolną wartość.
 * - maksymalna prędkość samochodu to 160 km/h | minimalna: 0 km/h.
 * - biegi powinny zmieniać się o:
 * - 2. 25 km/h,
 * - 3. 40 km/h,
 * - 4. 65 km/h,
 * - 5. 90 km/h
 *
 * - dla uproszczenia zmiana biegu na niższy odbywa się na podobnych prędkościach (tych podanych wyżej)
 *
 * Przykładowe User Stories:
 * Jako kierowca mogę przyspieszyć/zwolnić samochód od 0 do 160 km/h o dowolną wartość.
 * Jako kierowca mogę przyspieszyć/zmniejszyć samochód od aktualnej wartości o dowolną wartość.
 * Jako kierowca oczekuję, że samochód będzie automatycznie zmieniał biegi.
 * Jako kierowca chcę, aby w samochodzie była zainstalowana 5-biegowa skrzynia biegów.
 * */

describe('the Car with Gearbox', () => {

	it.todo('should make a car with a gearbox')

	it.todo('should start with 0 kph speed and 1st gear')

	it.todo('should speed Up max to 160kph')

	it.todo('should speed Down to min 0kph')

	it.todo('should change gear one-time to 2nd after speed up to 25kph')

	it.todo('should change gear 3-times to 4th after speed up to 65kph')

	it.todo('should reduce down gears 5 times from speed of 160kph to 10kph')

})
