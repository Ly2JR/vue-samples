/* jshint esversion:6 */
const ComponentEventApp = {
    data() {
        return {
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' },
            ],
            postFontSize: 1
        };
    },
    methods: {
        onEnlargeText(enlargeAmount) {
            this.postFontSize += enlargeAmount;
        }
    },
};

const app = Vue.createApp(ComponentEventApp);
app.component('blog-post', {
    props: ['title'],
    emits: ['enlargeText'],
    // template: `
    //     <div>
    //         <h4>{{title}}</h4>
    //         <button @click="$emit('enlargeText')">Enlarge text</button>
    //     </div>`

    template: `
    <div>
        <h4>{{title}}</h4>
        <button @click="$emit('enlargeText',0.1)">Enlarge text</button>
    </div>`
});
app.mount('#component-event');