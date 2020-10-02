<template>
 <div class="card">
   <div class="card-header">Grafik Harga Udang</div>
   <div class="card-body">
     <Grafik/>
   </div>
 </div>
</template>

<script>

import Grafik from './Grafik.vue'

export default {
  name: "GrafikHarga",
  components: {
    Grafik,
  }

  
};
</script>

<style scoped>
.card{
  margin-top: 1%;
}
</style>