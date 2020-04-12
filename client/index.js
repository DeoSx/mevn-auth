import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './routes';

import './styles/app.css';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
