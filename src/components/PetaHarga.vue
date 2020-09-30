<template>
  
 <!-- <gmap-map map-type-id="roadmap" :zoom="8" :center="{lat: -6.893, lng: 107.609}" style="width: 100%; height: 100%;"> -->
    <!-- <gmap-marker :position="{lat: -6.893721, lng: 107.62}" /> -->
    <!-- <gmap-marker :position="{lat: -6.893721, lng: 107.61}" :label="{labels: 2}"/> -->
    <!-- <gmap-info-window :position="{lat: -6.893721, lng: 107.61}" :options="{pixelOffset: {width: 0, height: -35}, content: 'A cafe'}" /> -->

  <!-- </gmap-map> -->
    <gmap-map
      :center="mapCenter"
      :zoom="7"
      style="width: 100%; height: 100%"
    >
      <!-- <gmap-info-window
        :options="infoWindowOptions"
        :position="infoWindowPosition"
        :opened="infoWindowOpened"
        @closeclick="handleInfoWindowClose"
      >
        <div class="info-window">
          <p v-text="activeRestaurant.name"></p>
        </div>
      </gmap-info-window> -->
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
// import json from "@/json/region.json";

export default {
  name: "PetaHarga",
  data() {
    return {
      // regions: json.data,
      regions: [],
    };
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
          lat: -6.893721,
          lng: 107.609,
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
