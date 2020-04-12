import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './routes';

import TextInput from './components/UI/TextInput.vue';
import Button from './components/UI/Button.vue'

import './styles/app.css';

//UI
Vue.component('text-input', TextInput);
Vue.component('Button', Button)

//Router
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
