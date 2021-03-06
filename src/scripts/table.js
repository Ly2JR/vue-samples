/* jshint esversion:6 */

const app = Vue.createApp({
    el: '#demo',
    data() {
        return {
            searchQuery: '',
            gridColumns: ['name', 'power'],
            gridData: [
                { name: 'Chuck Norris', power: Infinity },
                { name: 'Bruce Lee', power: 9000 },
                { name: 'Jackie Chan', power: 7000 },
                { name: 'Jet Li', power: 8000 }
            ]
        };


    }
});


// register the grid component
app.component('demo-grid', {
    template: '#grid-template',
    props: {
        heroes: Array,
        columns: Array,
        filterKey: String
    },

    data() {
        const sortOrders = {};
        this.columns.forEach(function(key) {
            sortOrders[key] = 1;
        });
        return {
            sortKey: '',
            sortOrders
        };

    },
    computed: {
        filteredHeroes() {
            const sortKey = this.sortKey;
            const filterKey = this.filterKey && this.filterKey.toLowerCase();
            const order = this.sortOrders[sortKey] || 1;
            let heroes = this.heroes;
            if (filterKey) {
                heroes = heroes.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key]).toLowerCase().indexOf(filterKey) > -1);

                    });
                });
            }
            if (sortKey) {
                heroes = heroes.slice().sort(function(a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return heroes;
        },
        sortOrders() {
            const columnSortOrders = {};

            this.columns.forEach(function(key) {
                columnSortOrders[key] = 1;
            });

            return columnSortOrders;
        }
    },

    methods: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        }
    }
});



app.mount('#demo');