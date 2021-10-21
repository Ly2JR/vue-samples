/* jshint esversion:6 */
const app = Vue.createApp({});
app.component('todo-list', {
    data() {
        return {
            todos: ['Feed a cat', 'Buy tickets']
        };
    },
    provide() {
        return {
            user: 'John Doe',
            todoLength: Vue.computed(() => this.todos.length),
        };
    },
    template: `
        <div>
            {{todos.length}}
        </div>
    `
});
app.component('todo-list-statistics', {
    inject: ['user', 'todoLength'],
    created() {
        console.log(`Injected property: ${this.user}`);
        console.log(`Injected property: ${this.todoLength}`);
    }
});
app.mount('#provider-inject');