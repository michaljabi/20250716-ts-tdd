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
            }
        )

        expect(document.body.innerHTML).toEqual('to consider...');
    })

})