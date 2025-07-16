/**
 * Problemem jest tutaj wewnętrzna zależność w takeTodo();
 *
 * Istnieje wywołanie używające `myFetch` z modułu zewnętrznego.
 * Nie mamy dostępu do tego połączenia w linii 19.
 * Nie możemy go szpiegować (Spy) ani go zatkać (Stub).
 *
 * Zamiast tego możemy odciąć cały moduł:./c005-ajax-caller
 * i zwrócić mockowaną wersję naszego serwisu!
 *
 * UWAGA:
 * - nie chcemy, aby to żądanie AJAX lub HTTPS działało on-line, o to chodzi.
 * - to ma być test jednostkowy, a nie integracyjny lub funkcjonalny!
 */

import {myFetch} from "./c05-ajax-caller";
import {Todo} from "./Todo";

vi.mock('./c05-ajax-caller', () => ({
	myFetch: vi.fn((url) => Promise.resolve({id: 1, title: 'This is fake', completed: true}))
}));

describe('[c005] - how to stub ajax/http/https calls before they will be called via our API?', () => {

	describe('takeTodo', () => {

		// Unit Under Test:

		function takeTodo() {
			return myFetch<Todo>('https://jsonplaceholder.typicode.com/todos/1')
				.then((todo) => {
					const {id, title, completed} = todo
					return `[${ completed ? '✔' : ' ' }] (${id}) ${title}`
				})
		}

		it('should fetch data from https://jsonplaceholder.typicode.com/todos/1', async () => {

			await takeTodo();

			expect(myFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1')
		})

		it('should call return task in format [done?] (id) title', async () => {

			const myTask = await takeTodo();

			expect(myTask).toBe('[✔] (1) This is fake')
		})

	})
})
