/* jshint esversion :6 */
const WatchApp = {
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark.;-)'
        };
    },
    watch: {
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
                this.getAnswer();
            }
        }
    },
    methods: {
        getAnswer() {
            this.answer = "Thingking...";
            axios.get('https://yesno.wtf/api')
                .then(response => {
                    this.answer = response.data.answer;
                })
                .catch(error => {
                    this.answer = 'Error!Could not reach the API.' + error;
                });
        }
    },
};

Vue.createApp(WatchApp).mount('#watch-example')