/* jshint esversion:6*/
const ModelCheckBoxApp = {
    data() {
        return {
            checked: false,
            checkedToggle: '',
            checkedNames: []
        };
    },
};

const App = Vue.createApp(ModelCheckBoxApp).mount('#model-checkbox');