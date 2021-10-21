/*jshint esversion:6 */
const ConditionalRenderApp = {
    data() {
        return {
            seen: false
        };
    },
};
Vue.createApp(ConditionalRenderApp).mount('#conditional-rendering');