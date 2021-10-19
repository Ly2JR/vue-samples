/* jshint esversion:6 */
const ForApp = {
    data() {
        return {
            parentMessage: 'Parent',
            items: [{ message: 'Foo' }, { message: 'Bar' }],
            numbers: [1, 2, 3, 4, 5]
        };
    },
    computed: {
        eventNumbers() {
            return this.numbers.filter(number => number % 2 === 0);
        }
    }
};

Vue.createApp(ForApp).mount('#array-with-index');