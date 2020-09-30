<template>
  <div class="harga-card">
    <div class="harga">
      <div class="content-harga">
        <ul>
          <li>Sulawesi barat</li>
          <li>Mamuju Utara</li>
          <li>PANEUS VANNAMEI</li>
          <li>HARGA SIZE 100 :</li>
          <li>RP 39.000</li>
        </ul>
      </div>
      <div class="content-social">
        <ul>
          <li><div class="tanggal">09 May 2019</div></li>
          <li>
            <div class="social-group">
              <ul>
                <li style="font-size: 12px">25 Shares</li>
                <li>
                  <img
                    :src="require('@/assets/img/whatsapp.svg')"
                    alt="whatsapp-icon"
                  />
                </li>
                <li>
                  <img
                    :src="require('@/assets/img/facebook.svg')"
                    alt="facebook-icon"
                  />
                </li>
                <li>
                  <img
                    :src="require('@/assets/img/twitter.svg')"
                    alt="twitter-icon"
                  />
                </li>
                <li>
                  <img
                    :src="require('@/assets/img/messenger.svg')"
                    alt="messenger-icon"
                  />
                </li>
              </ul>
            </div>
          </li>
          <li>Penjual:</li>
          <li>Juniarta Mahmud</li>
          <li><button>Lihat Kontak</button></li>
        </ul>
      </div>
    </div>
    <button style="background: blue; width: 100%; color: white">
      Semua Size
    </button>
  </div>
</template>

<script>
export default {
  name: "Harga",
  components: {
    
  },
};
</script>

<style scoped>
.harga-card {
  background: whitesmoke;
}

.harga {
  display: flex;
  justify-content: space-between;
}
ul {
  padding: 0;
  list-style-type: none;
}
.content-harga {
  width: 35%;
}

.tanggal {
  display: flex;
  justify-content: flex-end;
}

.social-group ul {
  display: flex;
  justify-content: flex-end;
}

.social-group li {
 margin-right: 5px;
 flex-wrap: wrap;
 justify-content: flex-end;
}
.social-group img {
  width: 30px;
  height: 30px;
}
</style>