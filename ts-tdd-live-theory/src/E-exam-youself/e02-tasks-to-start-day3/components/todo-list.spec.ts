/*
*
* Zadanie na start dnia 2:
*
* Napisz testy dla komponentu TodoList.
* samodzielnie zdecyduj, co i jak potrzeba przetestować.
*

* @vitest-environment jsdom
* */

import { TodoList } from "./todo-list"


describe('TodoList', () => {

    let todoList = new TodoList();


    it('should render', async () => {


       document.body.appendChild(todoList);

        await vi.waitFor(
            () => {
                if(!document.body.querySelectorAll('li').length) {
                    throw new Error('Cannot find li elements')
                }
            },
        )

        // setTimeout(() => {
        //     done()

        //     expect(document.body.innerHTML).toEqual('to consider...');
        // }, 2000)

    })

    it.todo('should display empty list properly')


    it.todo('should properly display 5 todos after fetch from server')


    it.todo('should display done todos as cossed ones')

})