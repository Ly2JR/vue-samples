/* jshint esversion:6 */

const app = Vue.createApp({
    data() {
        return {
            firstNumber: 20,
            secondNumber: 40
        };
    },
    computed: {
        result() {
            return this.firstNumber + this.secondNumber;
        }
    }
});

app.component('animated-integer', {
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            tweeningValue: 0
        };
    },
    computed: {
        fullValue() {
            return Math.floor(this.tweeningValue);
        }
    },
    methods: {
        tween(newValue, oldValue) {
            gsap.to(this.$data, {
                duration: 0.5,
                tweeningValue: newValue,
                ease: 'sine'
            });
        }
    },
    watch: {
        value(newValue, oldValue) {
            this.tween(newValue, oldValue);
        }
    },
    mounted() {
        this.tween(this.value, 0);
    },
    template: `<span>{{fullValue}}</span>`
});

app.mount('#calc-sum');