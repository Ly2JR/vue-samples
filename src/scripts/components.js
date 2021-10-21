/* jshint esversion:6 */
const TodoListApp = {
    data() {
        return {
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheesse' },
                { id: 2, text: 'Whatever else humans are supposed to eat' },
            ]
        };
    },
    //实例创建之后
    created() {
        console.log(this.groceryList);
    },
};

const app = Vue.createApp(TodoListApp);

app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{todo.text}}</li>`
});

app.mount('#todo-list-app');