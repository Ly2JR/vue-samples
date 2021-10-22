/* jshint esversion:6 */
const ball1 = document.querySelector('.ball1');
const ball2 = document.querySelector('.ball2');

gsap.from(ball1, {
    duration: 0.8,
    y: 220,
    repeat: -1,
    yoyo: true,
    ease: Power4.easeOut
});
gsap.from(ball2, {
    duration: 0.8,
    y: 225,
    repeat: -1,
    yoyo: true,
    ease: Circ.easeOut
});
gsap.fromTo(ball2, {
    duration: 0.8,
    scaleY: 1
}, {
    scaleY: 1.1,
    repeat: -1,
    yoyo: true,
    ease: Circ.easeOut
});