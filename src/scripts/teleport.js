/* jshint esversion:6 */

const app = Vue.createApp({});

app.component('modal-button', {
    template: `
    <button @click="modalOpen=true">
        Open full Screen modal!(with teleport!)
    </button>

    <teleport to="body">
        <div v-if="modalOpen" class="modal">
            <div>
                I'm a teleported modal!
                (My parent is "body")
                <button @click="modalOpen=false">
                    Close
                </button>
            </div>
        </div>
    </teleport>
    `,
    data() {
        return {
            modalOpen: false
        };
    },
});

app.mount('#teleport');