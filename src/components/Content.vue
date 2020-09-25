<template>
  <div class="card">
    <b>Persebaran Harga</b>
    <PetaHarga/>
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

<style scoped>
.card {
  border-radius: 5px;
  background: white;
  float: left;
  width: 45%;
  margin: 1%;
  padding: 1%;
  height: 400px;
}

.card p {
  text-align: center;
  margin: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}
</style>
