/*
*
* Zadanie na start dnia 2:
*
* Napisz testy dla komponentu TodoList.
* samodzielnie zdecyduj, co i jak potrzeba przetestować.
*

* @vitest-environment jsdom
* */

	import {http, HttpResponse } from "msw";
	import {setupServer} from "msw/node";

import { TodoList } from "./todo-list"
import { screen } from "@testing-library/dom";
import { TodoDTO } from "./todo-dto";


describe('TodoList', () => {

    let todoList: TodoList;

    type PartialTodoWithTitleAndComplete = Pick<TodoDTO, 'title' | 'completed'>;

    const server = setupServer(
		http.get('https://jsonplaceholder.typicode.com/todos', () => {
			return HttpResponse.json<PartialTodoWithTitleAndComplete[]>([
                {
                    title: 'sample',
                    completed: false
                },
                {
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                },
                {
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "title": "this is done",
                    "completed": true
                },
                {
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                },
            ])
		})
	)


    beforeEach(() => {
        todoList = new TodoList();
        document.body.append(todoList);
    })

    afterEach(() => {
         document.body.innerHTML = '';
    })


    beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())


    it('should render', async () => {

        // await vi.waitFor(
        //     () => {
        //         if(!document.body.querySelectorAll('li').length) {
        //             throw new Error('Cannot find li elements')
        //         }
        //     },
        // )

        // setTimeout(() => {
        //     done()

        //     expect(document.body.innerHTML).toEqual('to consider...');
        // }, 2000)
        expect(todoList).toBeInTheDocument();
    })

    it('should properly display 5 todos after fetch from server', async  () => {
        const todosLiElements = await screen.findAllByRole('listitem');

        expect(todosLiElements.length).toBe(5)
        expect(todosLiElements[4]).toHaveTextContent('laboriosam mollitia et enim quasi adipisci quia provident illum')
    })

   
    it('should display done todos as cossed ones', async () => {
        const todosLiElements = await screen.findAllByRole('listitem');
  
        // screen.debug();
        // const doneToDoItem = await screen.findyByRole('listitem', {name:'this is done'})

        const doneToDoItem = todosLiElements.find(i => i.textContent?.includes('this is done'))

        expect(doneToDoItem).toHaveStyle('text-decoration: line-through')
    })


    it('should display empty list properly', async () => {

        // GIVEN
        server.use(http.get('https://jsonplaceholder.typicode.com/todos/', () => {
            return HttpResponse.json([])
        }))

        // When
        const $ulList = await screen.findByRole('list');

        // Then
        expect($ulList).toBeEmptyDOMElement();
    })

})