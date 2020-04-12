import VueRouter from 'vue-router';

import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/auth/login',
      component: Login
    },
    {
      path: '/auth/register',
      component: Register
    }
  ]
});

export default router;
