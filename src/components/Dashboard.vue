<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <Petasebaran/>
      <ListHarga/>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Petasebaran from './Petasebaran.vue'
import ListHarga from './ListHarga.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Petasebaran,
    ListHarga,
  }
}
</script>

<style>

</style>
