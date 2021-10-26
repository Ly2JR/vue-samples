/* jshint esversion:6 */
const app = Vue.createApp({
    data() {
        return {
            showModal: false
        };

    }
});


app.component("modal", {
    template: "#modal-template"
});


app.mount('#app');