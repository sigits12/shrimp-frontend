<template>
  <div class="container-custom">
    <div class="card detail">
      <div class="card-header">Detail Harga</div>
      <div class="detail-harga">
        <div class="content">
          <ul>
            <li>{{ formatDate(price.date) }}</li>
            <li style="font-size: 15px; font-weight: bold">
              {{ price.species.name }}
            </li>
            <li style="color: blue; font-size: 20px">
              {{ price.region.province_name }}
            </li>
            <li style="font-size: 15px">{{ price.region.name }}</li>
          </ul>
        </div>
        <div class="content">
          <ul>
            <li class="list-kanan">Penjual:</li>
            <li class="list-kanan">
              <img
                v-if="price.creator.email_verified === true"
                :src="require('@/assets/img/verified.svg')"
                alt="verified-icon"
                title="Verified"
              />{{ price.creator.name }}
            </li>
            <li class="list-kanan"><button>Lihat Kontak</button></li>
          </ul>
        </div>
      </div>
      <div style="padding: 0 20px">
        <table class="table">
          <tbody>
            <tr>
              <th scope="row" style="width: 30%;">Size 20</th>
              <td>{{ formatRupiah(price.size_20) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 30</th>
              <td>{{ formatRupiah(price.size_30) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 40</th>
              <td>{{ formatRupiah(price.size_40) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 50</th>
              <td>{{ formatRupiah(price.size_50) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 60</th>
              <td>{{ formatRupiah(price.size_60) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 70</th>
              <td>{{ formatRupiah(price.size_70) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 80</th>
              <td>{{ formatRupiah(price.size_80) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 90</th>
              <td>{{ formatRupiah(price.size_90) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 100</th>
              <td>{{ formatRupiah(price.size_100) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 110</th>
              <td>{{ formatRupiah(price.size_110) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 120</th>
              <td>{{ formatRupiah(price.size_120) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 130</th>
              <td>{{ formatRupiah(price.size_130) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 140</th>
              <td>{{ formatRupiah(price.size_140) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 150</th>
              <td>{{ formatRupiah(price.size_150) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 160</th>
              <td>{{ formatRupiah(price.size_160) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 170</th>
              <td>{{ formatRupiah(price.size_170) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 180</th>
              <td>{{ formatRupiah(price.size_180) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 190</th>
              <td>{{ formatRupiah(price.size_190) }}</td>
            </tr>
            <tr>
              <th scope="row">Size 200</th>
              <td>{{ formatRupiah(price.size_200) }}</td>
            </tr>
            <tr>
              <th scope="row">Catatan</th>
              <td>{{price.remark}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="rekomendasi">
      Rekomendasi
      <hr style="width:60%;height:3px;border-width:0;color:gray;background-color:gray;">
      <div v-if="rekomendasi.length > 0">
        <Harga v-for="(recomend, index) in rekomendasi" :price="recomend" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Harga from "./Harga.vue";

export default {
  name: "DetailHarga",
  props: ["price"],
  data() {
    return {
      rekomendasi: [],
      rekomendasiParams : [],
    };
  },
  components: {
    Harga,
  },
  methods: {
    formatRupiah(params) {
      if (params === null) {
        return 'Tidak ada data';
      }
      let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
      return formatter.format(params);
    },
    formatDate(params) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let today = new Date(params);
      return today.toLocaleDateString("id-ID", options);
    },
    getRekomendasi(params) {
      axios
        .get("/shrimp_prices", {
          params: params,
        })
        .then((response) => (this.rekomendasi = response.data.data))
        .catch((error) => console.error(error));
    },
    setRekomendasiParams(params) {
      return {
        region_id: params.province_id,
        search: params.region.province_name,
      }
    }
  },
  created() {
    this.getRekomendasi(this.setRekomendasiParams(this.price))
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}

img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.container-custom {
  padding: 20px;
  display: flex;
}

.detail {
  width: 60%;
  margin-right: 20px;
}

.rekomendasi {
  width: 40%;
}

.content {
  padding: 20px;
}
.detail-harga {
  display: flex;
  justify-content: space-between;
}

.list-kanan {
  display: flex;
  justify-content: flex-end;
}
</style>