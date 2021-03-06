/* jshint esversion:6 */

const EventHandlingApp = {
    data() {
        return {
            message: 'Hello Vue.js!'
        };
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        }
    },
};

Vue.createApp(EventHandlingApp).mount('#event-handling');