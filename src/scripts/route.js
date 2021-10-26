/* jshint esversion:6 */

const { createApp } = require("@vue/runtime-dom");

const { creatApp, h } = Vue;

const NotFoundComponent = { template: '<p>Page not found</p>' };

const HomeComponent = { template: '<p>Home page</p>' };

const AboutComponent = { template: '<p>About page</p>' };

const routes = {
    '/': HomeComponent,
    '/about': AboutComponent
};

const SimpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),
    computed: {
        CurrentComponent() {
            return routes[this.currentRoute] || NotFoundComponent;
        }
    },
    render(h) {
        return h(this.CurrentComponent);
    },
};

createApp(SimpleRouter).mount('#route');