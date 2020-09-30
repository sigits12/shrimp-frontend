<template>
  <nav>
    <ul>
      <li class="logo">Pilih Lokasi</li>
      <li class="search-icon"><CariLokasi/></li>
    </ul>
  </nav>
</template>

<script>

import CariLokasi from './CariLokasi.vue'

export default {
  name: "Navbar",
  components: {
    CariLokasi
  }
};
</script>

<style scoped>
nav{
  padding: 10px 40px 10px 70px;
  background-color: white;
}

nav ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 0rem;
}

nav ul li.logo {
  flex: 1;
  text-decoration: none;
  font-weight: bold;
}

nav ul li.search-icon {
  flex: 4;
  display: flex;
}

</style>
