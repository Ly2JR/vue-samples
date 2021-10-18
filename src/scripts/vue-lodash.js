/* jshint esversion:6 */
const LodashApp = {
    data() {
        return {
            count: 4
        };
    },
};

var app = Vue.createApp(LodashApp);
app.component('save-button', {
    created() {
        //用lodash的防抖函数
        this.debouncedClick = _.debounce(this.clickMe, 500);
    },
    unmounted() {
        this.debouncedClick.cancel();
    },
    methods: {
        clickMe() {
            console.log("111");
        }
    },
    template: `<button @click="debouncedClick">Save</button>`
});
app.mount("#vue-lodash");