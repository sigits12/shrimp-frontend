<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <div class="dashboard">
        <div class="left-content">
          <Petasebaran/>
          <GrafikHarga/>
        </div>
        <div class="right-content">
          <ListHarga/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Petasebaran from './Petasebaran.vue'
import ListHarga from './ListHarga.vue'
import GrafikHarga from './GrafikHarga.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Petasebaran,
    ListHarga,
    GrafikHarga,
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
}
.right-content{
  width: 60%;

}
.left-content{
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 1%;
}
</style>

