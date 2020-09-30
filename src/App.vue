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
import Navbar from './components/Navbar.vue'
import Petasebaran from './components/Petasebaran.vue'
import ListHarga from './components/ListHarga.vue'

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
