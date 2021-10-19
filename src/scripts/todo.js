/* jshint esversion:6 */
var TodoApp = {
    data() {
        return {
            newTodoText: '',
            todos: [{
                id: 1,
                title: 'Do the dishes'
            }, {
                id: 2,
                title: 'Take out the trash'
            }, {
                id: 3,
                title: 'Mow the lawn'
            }],
            nextTodoId: 4
        };
    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.newTodoText++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    },
};

const app = Vue.createApp(TodoApp);
app.component('todo-item', {
    props: ['title'],
    emits: ['remove'],
    template: `<li>
        {{title}}
        <button @click="$emit('remove')">Remove</button>
        </li>`
});

app.mount('#todo-list');