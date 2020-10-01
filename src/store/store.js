import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lokasi: {
      region_id: '35',
      search: 'Jawa Timur'
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