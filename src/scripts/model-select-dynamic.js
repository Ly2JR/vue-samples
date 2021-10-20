/* jshint esversion:6*/
const ModelSelectDynamicApp = {
    data() {
        return {
            selected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        };
    },
};

Vue.createApp(ModelSelectDynamicApp).mount('#model-select-dynamic');