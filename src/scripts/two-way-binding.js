/* jshint esversion:6 */
const TwoWayBindingApp = {
    data() {
        return {
            message: 'Hello Vue!'
        };
    },
};
Vue.createApp(TwoWayBindingApp).mount('#two-way-binding');