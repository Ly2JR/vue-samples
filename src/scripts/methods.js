/* jshint esversion:6*/
const MethodsApp = {
    data() {
        return {
            count: 4
        }
    },
    methods: {
        increment() {
            //`this`指向该组件实列
            this.count++;
        }
    },
};

const App = Vue.createApp(MethodsApp).mount('#method');