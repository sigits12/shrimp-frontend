<template>
    <gmap-map
      :center="mapCenter"
      :zoom="7"
      style="width: 100%; height: 100%"
    >
      <gmap-marker
        v-for="r in regions"
        :key="r.id"
        :position="getPosition(r.latitude, r.longitude)"
        :label="setLabel(r.name)"
        :clickable="true"
        :draggable="false"
      ></gmap-marker>
    </gmap-map>
</template>

<script>
import axios from "axios";

export default {
  name: "PetaHarga",
  data() {
    return {
      regions: [],
    };
  },
  created() {
    this.setLokasi(this.$store.state.lokasi);
  },
  methods: {
    setLokasi(lokasi) {
      axios
        .get("/regions", {
          params: lokasi,
        })
        .then((response) => (this.regions = response.data.data))
        .catch((error) => console.error(error));
    },
    getPosition(latitude, longitude) {
      return {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      };
    },
    setLabel(name) {
      return {
        text: name,
      };
    },
  },
  computed: {
    mapCenter() {
      if (!this.regions.length) {
        return {
          lat: -7.53606390,
          lng: 112.23840170,
        };
      }
      return {
        lat: parseFloat(this.regions[0].latitude),
        lng: parseFloat(this.regions[0].longitude),
      };
    },
  },
  watch: {
    '$store.state.lokasi': function() {
      this.setLokasi(this.$store.state.lokasi);
    }
  },
};
</script>
