	/**
	 * Teraz używamy MSW:
	 *
	 * @see https://mswjs.io/
	 *
	 * */

	import {http, HttpResponse } from "msw";
	import {setupServer} from "msw/node";
	import {myFetch} from "./c05-ajax-caller";
	import {Todo} from "./Todo";

	describe('[c006] - how to stub ajax/http/https calls?', () => {

	// Ten serwer przechwyci WSZYSTKIE nasze żądania sieciowe do danego end-point'u:
	const server = setupServer(
		http.get('https://jsonplaceholder.typicode.com/todos/1', () => {
			return HttpResponse.json({id: 1, title: 'This is fake', completed: true})
		})
	)

	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	describe('takeTodo - with fake server MSW', () => {

		// Unit Under Test:

		function takeTodo(id: number) {
			return myFetch<Todo>('https://jsonplaceholder.typicode.com/todos/' + id)
				.then((todo) => {
					const {id, title, completed} = todo
					return `[${ completed ? '✔' : ' ' }] (${id}) ${title}`
				})
				.catch((err) => {
					return `Cannot load task id: ${id}, [error: ${err.message}]`;
				})
		}

		it('should render completed task in format [✔] (id) title', async () => {

			const myTask = await takeTodo(1);

			expect(myTask).toBe('[✔] (1) This is fake')
		})

		it('should render uncompleted task in format [ ] (id) title', async () => {

			server.use(http.get('https://jsonplaceholder.typicode.com/todos/:id', ({params }) => {
				// zwracamy id
				const { id } = params ;
				return  HttpResponse.json({id , title: 'This is other task', completed: false})
			}))

			const myTask = await takeTodo(2);

			expect(myTask).toBe('[ ] (2) This is other task')
		})

		it('should render errors', async () => {

			server.use(http.get('https://jsonplaceholder.typicode.com/todos/:id', () => {
				return HttpResponse.json({message: 'Not authorized'}, {status: 403})
			}))

			const myTask = await takeTodo(1232);

			expect(myTask).toBe('Cannot load task id: 1232, [error: Not authorized]')
		})

	})
})
