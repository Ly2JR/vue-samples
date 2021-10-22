/* jshint esversion:6 */

const TransitionFadeApp = {
    data() {
        return {
            show: true
        };
    },
};

const app = Vue.createApp(TransitionFadeApp).mount('#transition-slide-fade');