/* jshint esversion:6 */
const TransitionComponentApp = {
    data() {
        return {
            view: "v-a"
        };
    },
    components: {
        "v-a": {
            template: "<div>Component A</div>"
        },
        "v-b": {
            template: "<div>Component B</div>"
        }
    }
};

Vue.createApp(TransitionComponentApp).mount("#transition-component");