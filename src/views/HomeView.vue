<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import Barre from '@/components/Barre.vue'
//import useShopStore from '@/stores/shop'
import {useCounterStore} from '@/stores/counter'
const counter = useCounterStore()

console.log( 'count ' + counter.count)

//const shopStore = useShopStore()
//const promo = shopStore.rubriques
console.log("🚀 ~ file: HomeView.vue:9 ~ promo:")

</script>

<template>
  <Barre />
  <main>
    
      accueil
      <h1>sdfegs</h1>
      <h1>sdfegs</h1>
      <h1>sdfegs</h1>
      <h1>sdfegs</h1>

  </main>
</template>
