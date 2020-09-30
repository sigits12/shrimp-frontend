<template>
  <div class="card">
    <h5 class="card-header">List Harga Udang</h5>
    <div class="card-body">
      <Harga/>
    </div>
  </div>
</template>

<script>
import Harga from './Harga.vue'

export default {
  name: "ListHarga",
  components: {
    Harga,
  },
};
</script>
