<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import Barre from '@/components/Barre.vue'
import useShopStore from '@/stores/shop'


const shopStore = useShopStore()
const promo = shopStore.dataShop
console.log("🚀 ~ file: HomeView.vue:9 ~ promo:" + JSON.stringify(promo))

const router = useRouter()

const menuList = ref(shopStore.dataShop)

const restoId = ref(shopStore.restoId)
</script>

<template>
  <Barre />
  <main class="contenu home">
    
    <n-space vertical>
      <n-button 
        v-for="rub in menuList" :key="rub.id"
        strong secondaryc block round type="error" justify="center"
        @click="router.push({name:'rubrique', params: { restoId, rubriqueId:rub.id} })"
      >
        {{ rub.titre }}
      </n-button>
    </n-space>

  </main>
</template>


<style scoped>

.home {
  width:100vw;
  
}
.home div {
  align-items:center;
}
.n-button {
  width: 90vw;
  height: 60px;
  text-align: center;
}
</style>
