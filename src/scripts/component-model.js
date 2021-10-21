/* jshint esversion:6 */
const UserName = {
    props: {
        firstName: String,
        lastName: String
    },
    emits: ['update:firstName', 'update:lastName'],
    template: `
    <input type="text" 
            :value="firstName"
            @input="$emit('update:firstName',$event.target.value)"/>

    <input type="text" 
            :value="lastName"
            @input="$emit('update:lastName',$event.target.value)"/>
    `
};

const ComponentModelApp = {
    components: {
        UserName,
    },
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        };
    },
};

Vue.createApp(ComponentModelApp).mount('#component-model');