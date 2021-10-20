/* jshint esversion:6 */
const InlineHandlerApp = {
    methods: {
        say(message) {
            alert(message);
        },
        warn(message, event) {
            if (event) {
                event.preventDefault();
            }
            alert(message);
        },
        one(event) {
            if (event) {
                alert(event.target.tagName);
            }
            alert("one");
        },
        two(event) {
            if (event) {
                alert(event.target.tagName);
            }
            alert("two");
        }
    },
};

Vue.createApp(InlineHandlerApp).mount('#inline-handler');