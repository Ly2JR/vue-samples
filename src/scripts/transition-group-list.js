/* jshint esversion:6 */
const TransitionGroupListApp = {
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        };
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        }
    },
};
const app = Vue.createApp(TransitionGroupListApp).mount('#transition-group-list');