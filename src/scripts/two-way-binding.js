/* jshint esversion:6 */
const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!'
        };
    },
};
Vue.createApp(TwoWayBinding).mount('#two-way-binding');