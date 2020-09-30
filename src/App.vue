<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <Content/>
      <PriceList/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import PriceList from './components/PriceList.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Content,
    PriceList,
  }
}
</script>

<style>

</style>
