interface TodoDTO {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface Todo {
    title: string;
    done: boolean;
}

export class TodoList extends HTMLElement {

    list: Todo[] = [];
    $uiList: HTMLUListElement;

    constructor () {
        super();
        this.innerHTML = `
	      <h5>My sample todo List</h5>
	      <ul></ul>
		 `
        this.$uiList = this.querySelector('ul') as HTMLUListElement;
    }

    async loadTodos() {
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos/')
        const json: TodoDTO[] = await response.json()
        this.list = json.map(({title, completed}) => ({ title, done: completed}))
    }

    async connectedCallback() {
        await this.loadTodos();
        this.renderList();
    }

    renderList() {
        this.$uiList.innerHTML = this.list.map(e => `<li>${e.title}</li>`).join('')
    }
}
customElements.define('todo-list', TodoList);