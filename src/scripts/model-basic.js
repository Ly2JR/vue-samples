/* jshint esversion:6*/
const ModelBasicApp = {
    data() {
        return {
            message: '',
            messageLazy: '',
            age: 0,
            name: ''
        };
    },
};

const App = Vue.createApp(ModelBasicApp).mount('#model-basic');