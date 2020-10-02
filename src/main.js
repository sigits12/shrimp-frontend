import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import * as VueGoogleMaps from 'vue2-google-maps';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { store } from './store/store';
import router from './routes';


import 'vue-select/dist/vue-select.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/style.css';

Vue.config.productionTip = false;

Vue.component('v-select', vSelect)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA38N74y_xGwSV0bI_36OIXDdH-corZO5A',
    libraries: 'places',
  },
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  },
}).$mount('#app')
