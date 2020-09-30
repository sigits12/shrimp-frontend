import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lokasi: {
      region_id: String,
      search: String
    }
  },
  getters: {
    lokasi: state => state.lokasi
  },
  mutations: {
    ubahLokasi: function(state, lokasiBaru) {
      state.lokasi = lokasiBaru;
    }
  }
})