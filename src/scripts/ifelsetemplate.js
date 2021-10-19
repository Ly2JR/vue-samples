/* jshint esversion:6 */
const IfElseTemplate = {
    data() {
        return {
            ok: true
        };
    },
};

const app = Vue.createApp(IfElseTemplate);
app.mount('#if-else-template');