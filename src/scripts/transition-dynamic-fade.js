/* jshint esversion:6 */

const TransitionDynamicFadeApp = {
    data() {
        return {
            show: true,
            fadeInDuration: 1000,
            fadeOutDuration: 1000,
            maxFadeDuration: 1500,
            stop: true
        };
    },
    mounted() {
        this.show = false;
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el, done) {
            let vm = this;
            Velocity(el, { opacity: 1 }, {
                duration: this.fadeInDuration,
                complete: function() {
                    done();
                    if (!vm.stop) {
                        vm.show = false;
                    }
                }
            });
        },
        leave(el, done) {
            let vm = this;
            Velocity(el, { opacity: 0 }, {
                duration: this.fadeOutDuration,
                complete: function() {
                    done();
                    vm.show = true;
                }
            });
        }
    },
};

const app = Vue.createApp(TransitionDynamicFadeApp).mount('#transition-dynamic-fade');