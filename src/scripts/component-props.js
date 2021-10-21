/* jshint esversion:6 */

const app = Vue.createApp({});
app.component('blog-post', {
    //props: ['title'],
    props: {
        title: {
            type: String,
            default: '这是标题',
            required: true,
            // validator(value) {
            //     return ['success', 'warning', 'danger'].includes(value);
            // }
        }
    },
    template: `<h4>{{title}}</h4>`
});
app.mount('#component-props');