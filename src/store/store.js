import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lokasi: {
      // type: Array,
      region_id: "3306",
      search: "Purworejo"
    }
  }
})