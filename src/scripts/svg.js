/* jshint esversion:6 */
const defaultSides = 10;
const stats = Array.apply(null, { length: defaultSides }).map(() => 100);


function valueToPoint(value, index, total) {
    let x = 0;
    let y = -value * 0.9;
    let angle = ((Math.PI * 2) / total) * index;
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    let tx = x * cos - y * sin + 100;
    let ty = x * sin + y * cos + 100;
    return { x: tx, y: ty };
}

function generatePoints(stats) {
    let total = stats.length;
    return stats.map(function(stat, index) {
        let point = valueToPoint(stat, index, total);
        return point.x + "," + point.y;
    }).join(" ");
}

const SvgApp = {
    data() {
        return {
            stats: stats,
            points: generatePoints(stats),
            sides: defaultSides,
            minRadius: 50,
            interval: null,
            updateInterval: 500
        };
    },
    watch: {
        sides(newSides, oldSides) {
            let sidesDifference = newSides - oldSides;
            if (sidesDifference > 0) {
                for (let i = 1; i <= sidesDifference; i++) {
                    this.stats.push(this.newRandomValue());
                }
            } else {
                let absoluteSidesDifference = Math.abs(sidesDifference);
                for (let i = 1; i <= absoluteSidesDifference; i++) {
                    this.stats.shift();
                }
            }
        },
        stats(newStats) {
            gsap.to(this.$data, this.updateInterval / 1000, {
                points: generatePoints(newStats)
            });
        },
        updateInterval() {
            this.resetInterval();
        }
    },
    mounted() {
        this.resetInterval();
    },
    methods: {
        randomizeStats() {
            let vm = this;
            this.stats = this.stats.map(() => vm.newRandomValue());
        },
        newRandomValue() {
            return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius));
        },
        resetInterval() {
            let vm = this;
            clearInterval(this.interval);
            this.randomizeStats();
            this.interval = setInterval(() => {
                vm.randomizeStats();
            }, this.updateInterval);
        }
    },
};
const app = Vue.createApp(SvgApp).mount('#svg');