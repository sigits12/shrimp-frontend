<template>
  <div class="card">
    <b>Persebaran Harga</b>
    <PetaHarga/>
  </div>
</template>

<script>
import PetaHarga from './PetaHarga.vue'

export default {
  name: "PriceList",
  components: {
    PetaHarga
  }
};
</script>

<style>
</style>
