/* jshint esversion:6 */

const app = Vue.createApp({});
app.component('alert-box', {
    template: `
    <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `
});
app.mount('#slot');