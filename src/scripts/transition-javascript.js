/* jshint esversion:6 */
const TransitionJavascriptApp = {
    data() {
        return {
            show: false
        }
    },
    methods: {
        beforeEnter(el) {
            gsap.set(el, {
                scaleX: 0.8,
                scaleY: 1.2
            });
        },
        enter(el, done) {
            gsap.to(el, {
                duration: 1,
                scaleX: 1.5,
                scaleY: 0.7,
                opacity: 1,
                x: 150,
                ease: 'elastic.inOut(2.5, 1)',
                onComplete: done
            })
        },
        leave(el, done) {
            gsap.to(el, {
                duration: 0.7,
                scaleX: 1,
                scaleY: 1,
                x: 300,
                ease: 'elastic.inOut(2.5, 1)',
            });
            gsap.to(el, {
                duration: 0.2,
                delay: 0.5,
                opacity: 0,
                onComplete: done
            });
        }
    }
};

Vue.createApp(TransitionJavascriptApp).mount('#transition-javascript');