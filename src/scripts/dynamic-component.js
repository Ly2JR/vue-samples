/* jshint esversion:6 */
const DynamicComponentApp = {
    data() {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive']
        };
    },
    computed: {
        currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    }
};

const app = Vue.createApp(DynamicComponentApp);

app.component('tab-home', {
    template: `
    <div class="demo-tab">Home component</div>
    `
});
app.component('tab-posts', {
    template: `
    <div class="demo-tab">Post component</div>
    `
});
app.component('tab-archive', {
    template: `
    <div class="demo-tab">Archive component</div>
    `
});

app.mount('#dynamic-component');