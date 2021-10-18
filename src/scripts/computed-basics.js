/* jshint esversion:6 */
const ComputedApp = {
    data() {
        return {
            authors: {
                name: 'John Doe',
                books: [
                    'Vue 2-Advanced Guide',
                    'Vue 3-Basic Guide',
                    'Vue 4-The Mystery',
                ]
            }
        };
    },
    computed: {
        //计算属性的getter
        publishedBooksMessage() {
            //`this`指向vm实例
            return this.authors.books.length > 0 ? "Yes" : 'No';
        }
    }
};

Vue.createApp(ComputedApp).mount('#computed-basics');