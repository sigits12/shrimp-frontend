<template>
  <div class="card card-content">
    <div class="card-header">Persebaran Harga Udang Size 100</div>
      <PetaHarga/>
      <div class="card-footer">
        Keterangan
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
