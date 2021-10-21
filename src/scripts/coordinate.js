/* jshint esversion:6 */

const CoordinateApp = {
    data() {
        return {
            x: 0
        };
    },
    methods: {
        xCoordinate(e) {
            this.x = e.clientX;
        }
    },
};

const app = Vue.createApp(CoordinateApp).mount('#coordinate');