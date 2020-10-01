<template>
  <div class="card">
    <div class="card-header">List Harga Udang</div>
      <Harga v-for="(price, index) in prices" :price="price" :key="index"/>
  </div>
</template>

<script>
import axios from "axios";
import Harga from './Harga.vue'

export default {
  name: "ListHarga",
  components: {
    Harga,
  },
  data() {
    return {
      prices: [],
    };
  },
  methods: {
    getHarga(params) {
      axios
        .get("/shrimp_prices", {
          params: params,
        })
        .then((response) => (this.prices = response.data.data))
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getHarga(this.$store.state.lokasi);
  },
  watch: {
    '$store.state.lokasi': function() {
      this.getHarga(this.$store.state.lokasi);
    }
  },
};
</script>
<style>
</style>
