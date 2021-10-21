/* jshint esversion:6 */


const MyComponent = {
    props: {
        modelValue: String,
        modelModifiers: {
            default: () => ({})
        },
    },
    methods: {
        emitValue(e) {
            let value = e.target.value;
            if (this.modelModifiers.capitalize) {
                value = value.charAt(0).toUpperCase() + value.slice(1);
            }
            this.$emit('update:modelValue', value);
        }
    },
    emits: ['update:modelValue'],
    template: `
        <input type="text" 
                :value="modelValue"
                @input="emitValue"/>
    `,
    created() {
        console.log(this.modelModifiers);
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



app.mount('#component-model-modifier');