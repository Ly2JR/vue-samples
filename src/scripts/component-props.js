/* jshint esversion:6 */

const app = Vue.createApp({});
app.component('blog-post', {
    props: ['title'],
    template: `<h4>{{title}}</h4>`
});
app.mount('#component-props');