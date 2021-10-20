/* jshint esversion:6 */

const app = Vue.createApp({});
app.component('custom-input', {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    // template: `
    //     <input :value="modelValue"
    //              @input="$emit('update:modelValue',$event.target.value)"/>
    // `,
    template: `
        <input v-model="value"/>
    `,
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
});
app.mount('#custom-input');