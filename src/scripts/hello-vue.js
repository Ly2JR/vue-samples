 /*jshint esversion: 6 */

 const HelloVueApp = {
     data() {
         return {
             message: 'Hello Vue!!'
         };
     }
 };

 Vue.createApp(HelloVueApp).mount('#hello-vue');