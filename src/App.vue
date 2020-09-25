<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <Content/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Content
  }
}
</script>

<style>

</style>
