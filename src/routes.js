import Vue from 'vue';
import VueRouter from 'vue-router';
import detailHarga from './components/DetailHarga.vue';
import dashboard from './components/Dashboard.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'/', 
    name: 'dashboard',
    component: dashboard,
  },
  {
    path:'/detail', 
    name: 'detail',
    component: detailHarga,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;