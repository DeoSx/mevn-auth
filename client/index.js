import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Validator from 'vee-validate'

import router from './routes';
import store from './store/'

import TextInput from './components/UI/TextInput.vue';
import Button from './components/UI/Button.vue'

import './styles/app.css';

//UI
Vue.component('text-input', TextInput);
Vue.component('Button', Button)

//Plugins
Vue.use(VueRouter);
Vue.use(Validator)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
