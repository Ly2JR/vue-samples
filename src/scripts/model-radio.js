/* jshint esversion:6*/
const ModelRadioApp = {
    data() {
        return {
            picked: '',
            pick: '',
            a: "123"
        };
    },
    methods: {
        radioChange() {
            console.log(this.a);
        }
    },
};

const App = Vue.createApp(ModelRadioApp).mount('#model-radio');