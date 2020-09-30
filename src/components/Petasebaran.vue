<template>
  <div class="card card-content">
    <h5 class="card-header">Persebaran Harga Udang Size 100</h5>
      <PetaHarga/>
      <div class="card-footer">
        2 days ago
      </div>
  </div>

</template>

<script>
import PetaHarga from './PetaHarga.vue'

export default {
  name: "Content",
  components: {
    PetaHarga
  }
};
</script>

<style>
</style>
