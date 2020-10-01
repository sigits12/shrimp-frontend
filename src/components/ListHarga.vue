<template>
  <div class="card">
    <h5 class="card-header">List Harga Udang</h5>
    <!-- <div class="card-body"> -->
      <Harga v-for="(price, index) in prices" :price="price" :key="index"/>
    <!-- </div> -->
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
  computed: {
    
  },
  watch: {
    '$store.state.lokasi': function() {
      this.getHarga(this.$store.state.lokasi);
    }
  },
};
</script>
