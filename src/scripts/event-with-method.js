/* jshint esversion:6 */
const EventWithMethodApp = {
    data() {
        return {
            name: 'Vue.js'
        };
    },
    methods: {
        greet(event) {
            alert('Hello ' + this.name + '!');
            if (event) {
                alert(event.target.tagName);
            }
        }
    },
};

Vue.createApp(EventWithMethodApp).mount('#event-with-method');