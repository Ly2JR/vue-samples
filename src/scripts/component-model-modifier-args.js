/* jshint esversion:6 */


const MyComponent = {
    props: ['description', 'descriptionModifiers'],
    emits: ['update:description'],
    template: `
        <input type="text" 
                :value="description"
                @input="$emit('update:description',$event.target.value)"/>
    `,
    created() {
        console.log(this.descriptionModifiers);
    },
};

const ComponentModelModifierApp = {
    components: {
        MyComponent
    },
    data() {
        return {
            myText: ''
        };
    },
};

const app = Vue.createApp(ComponentModelModifierApp);



app.mount('#component-model-modifier-args');