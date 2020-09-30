<template>
  <div class="region">
    <v-select placeholder="Semua Lokasi" v-model="selected" :value="selected" :options="regions" label="full_name" @search="onSearch">
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
      selected: null,
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
    }, 350),
    // setLokasi(event) {
    //   // this.$emit("inputData", this.selected);
    //   console.log(event.id);
    //   // alert('ok');
    //   // this.$emit("input", val);

    //   // this.selected = null;
    // }
  },
  created() {
    axios.get('/regions')
      .then(response => {
      this.regions = response.data.data
    })
  },
  watch: {
    selected(value) {
      let lokasi = {
          "region_id": value.province_id,
          "search": value.full_name,
      }
      this.$store.commit('ubahLokasi', lokasi);
    }
  }
};
</script>

<style scoped>
.region {
  height: 40px;
	width: 60%;
}

</style>
