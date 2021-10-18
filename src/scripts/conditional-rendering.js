/*jshint esversion:6 */
const ConditionalRender = {
    data() {
        return {
            seen: false
        };
    },
};
Vue.createApp(ConditionalRender).mount('#conditional-rendering');