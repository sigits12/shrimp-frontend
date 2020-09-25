<template>
  <div class="region">
    <v-select placeholder="Semua Lokasi" v-model="selectedItem" :value="selected" :options="regions" :reduce="full_name => full_name.id" label="full_name" @search="onSearch">
      <template slot="no-options">
      ketikan lokasi..
      </template>
      <template slot="option" slot-scope="region">
        <div class="d-center">
          {{ region.full_name }}
          </div>
      </template>
    </v-select>
  </div>
</template>

<script>
import axios from "axios";
import _ from 'lodash';


export default {
  name: "CariLokasi",
  data () {
    return {
      regions: [],
      selectedItem: null,
    }
  },
  methods: {
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      fetch(
        `/regions?search=${escape(search)}`
      ).then(res => {
        res.json().then(json => (vm.regions = json.data));
        loading(false);
      });
    }, 350)
  },
  created() {
    axios.get('/regions')
      .then(response => {
      this.regions = response.data.data
    })
  },
};
</script>

<style scoped>
.region {
  height: 40px;
	width: 60%;
}

</style>
