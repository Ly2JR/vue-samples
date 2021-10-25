/* jshint esversion:6 */
const app = Vue.createApp({
    data() {
        return {
            direction: 'right',
            pinPadding: 200
        };
    },
});

app.directive('pin', {
    mounted(el, binding) {
        el.style.position = 'fixed';
        const s = binding.arg || 'top';
        el.style[s] = binding.value + 'px';
    },
    updated(el, binding) {
        const s = binding.arg || 'top';
        el.style[s] = binding.value + 'px';
    },
});

app.mount('#dynamic-arguments');