/* jslint esversion:6 */
const ListRender = {
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

Vue.createApp(ListRender).mount('#list-rendering');