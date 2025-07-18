export class TodoList extends HTMLElement {

    list =  [];

    constructor () {
        super();
        this.innerHTML = `
	      <h5>My sample todo List</h5>
	      <ul></ul>
		 `
        this.$uiList = this.querySelector('ul');
    }

    async loadTodos() {
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos/')
        const json = await response.json()
        this.list = json.map(({title, completed}) => ({ title, done: completed}))
    }

    async connectedCallback() {
        await this.loadTodos();
        this.renderList();
    }

    renderList() {
        this.$uiList.innerHTML = this.list.map(({title, done}) => `<li style="${ done ? 'text-decoration: line-through' : ''}">${title}</li>`).join('')
    }
}
customElements.define('todo-list', TodoList);