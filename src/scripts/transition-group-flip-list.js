/* jshint esversion:6 */
const TransitionGroupFlipListApp = {
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        };
    },
    methods: {
        shuffle() {
            this.items = _.shuffle(this.items);
        }
    },
};

const app = Vue.createApp(TransitionGroupFlipListApp).mount('#transition-group-flip-list');