/*jshint esversion:6 */
const CounterApp = {
    data() {
        return {
            counter: 0
        };
    },
    mounted() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    },
};

Vue.createApp(CounterApp).mount('#counter');