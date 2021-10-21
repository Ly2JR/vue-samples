/* jshint esversion:6 */
const TodoList = {
    data() {
        return {
            items: ['Feed a cat', 'Buy milk']
        };
    },
    template: `
        <ul>
            <li v-for="(item,index) in items">
                <slot :item="item"></slot>
            </li>
        </ul>
    `
};

Vue.createApp({
    components: {
        TodoList
    }
}).mount('#component-slot');