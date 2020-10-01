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
              <th scope="row">Size 20</th>
              <td>{{ price.size_20 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 30</th>
              <td>{{ price.size_30 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 40</th>
              <td>{{ price.size_40 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 50</th>
              <td>{{ price.size_50 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 60</th>
              <td>{{ price.size_60 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 70</th>
              <td>{{ price.size_70 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 80</th>
              <td>{{ price.size_80 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 90</th>
              <td>{{ price.size_90 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 100</th>
              <td>{{ price.size_100 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 110</th>
              <td>{{ price.size_110 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 120</th>
              <td>{{ price.size_120 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 130</th>
              <td>{{ price.size_130 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 140</th>
              <td>{{ price.size_140 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 150</th>
              <td>{{ price.size_150 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 160</th>
              <td>{{ price.size_160 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 170</th>
              <td>{{ price.size_170 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 180</th>
              <td>{{ price.size_180 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 190</th>
              <td>{{ price.size_190 || 'Tidak ada Data' }}</td>
            </tr>
            <tr>
              <th scope="row">Size 200</th>
              <td>{{ price.size_200 || 'Tidak ada Data' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card rekomendasi">
      <div class="card-header">Rekomendasi</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHarga",
  props: ["price"],
  methods: {
    formatDate(params) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let today = new Date(params);
      return today.toLocaleDateString("id-ID", options);
    },
  },
  created() {
    // this.getHarga('787');
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