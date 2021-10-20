/* jshint esversion:6*/
const ModelSelectApp = {
    data() {
        return {
            selected: '',
            multSelected: [],
            dynamicSelected: '',
            dynamicValue: 456
        };
    },
    methods: {
        selectChange() {
            console.log(this.dynamicValue);
        }
    },
};

Vue.createApp(ModelSelectApp).mount('#model-select');