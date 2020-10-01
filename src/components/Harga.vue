<template>
  <div style="margin-top:10px; padding-left:10px; padding-right:10px;">
    <div class="harga-card">
      <div class="harga">
        <div class="content-harga">
          <ul>
            <li style="color: blue; font-size: 20px">
              {{ price.region.province_name }}
            </li>
            <li style="color: blue; font-size: 15px">{{ price.region.name }}</li>
            <li>{{ price.species.name }}</li>
            <li>HARGA SIZE 100 :</li>
            <li style="font-weight: bold; font-size: 30px">
              {{ formatRupiah(price.size_100) }}
            </li>
          </ul>
        </div>
        <div class="content-social">
          <ul>
            <li class="list-kanan">{{formatDate(price.date)}}</li>
            <li>
              <div class="social-group">
                <ul>
                  <li style="font-size: 12px">25 Shares</li>
                  <li>
                    <img
                      :src="require('@/assets/img/whatsapp.svg')"
                      alt="whatsapp-icon"
                      title="Whatsapp"
                    />
                  </li>
                  <li>
                    <img
                      :src="require('@/assets/img/facebook.svg')"
                      alt="facebook-icon"
                      title="Facebook"
                    />
                  </li>
                  <li>
                    <img
                      :src="require('@/assets/img/twitter.svg')"
                      alt="twitter-icon"
                      title="Twitter"
                    />
                  </li>
                  <li>
                    <img
                      :src="require('@/assets/img/messenger.svg')"
                      alt="messenger-icon"
                      title="Messenger"
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li class="list-kanan">Penjual:</li>
            <li class="list-kanan"><img v-if="price.creator.email_verified === true" :src="require('@/assets/img/verified.svg')" alt="verified-icon" title="Verified" style="width:20px;height:20px; margin-right: 5px;">{{price.creator.name}}</li>
            <li class="list-kanan"><button>Lihat Kontak</button></li>
          </ul>
        </div>
      </div>
      <router-link
        :to="{name: 'detail', params: { price: price } }"
        v-slot="{ href, navigate}"
        >
          <button :href="href" @click="navigate" class='btn-semua-size'>
            Semua Size
          </button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Harga",
  props: ['price'],
  methods: {
    formatRupiah(params) {
      let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
      return formatter.format(params);
    },
    formatDate(params) {
      let options = {year: 'numeric', month: 'long', day: 'numeric' };
      let today  = new Date(params);
      return today.toLocaleDateString("id-ID", options);
    }
  },
};
</script>

<style scoped>
.harga-card {
  background: whitesmoke;
  padding: 10px;
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

.list-kanan {
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
.btn-semua-size{
    background: blue; 
    width: 100%; 
    color: white;
    border-radius: 3px;
    border: none;
    height: 30px;
}
</style>