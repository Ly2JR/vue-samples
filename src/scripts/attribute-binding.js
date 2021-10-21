/* jshint esversion:6 */
const AttributeBindingApp = {
    data() {
        return {
            message: 'You loaded this page on ' + new Date().toLocaleString()
        };
    },
};

Vue.createApp(AttributeBindingApp).mount('#bind-attribute');