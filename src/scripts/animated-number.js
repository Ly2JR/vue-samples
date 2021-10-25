/* jshint esversion:6 */

const AnimatedNumberApp = {
    data() {
        return {
            number: 0,
            tweenedNumber: 0
        };
    },
    computed: {
        animatedNumber() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number(newValve) {
            gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValve });
        }
    }
};
const app = Vue.createApp(AnimatedNumberApp).mount('#animated-number');