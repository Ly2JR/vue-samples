/* jslint esversion:6 */
const ListRenderApp = {
    data() {
        return {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' },
            ]
        };
    },
};

Vue.createApp(ListRenderApp).mount('#list-rendering');