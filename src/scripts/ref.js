/* jshint esversion:6 */

const app = Vue.createApp({});

app.component('base-input', {
    template: `
    <input ref="input"/>
    `,
    methods: {
        focusInput() {
            this.$refs.input.focus();
        }
    },
    mounted() {
        this.focusInput();
    },
});

app.mount('#ref');