<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import {useShopStore} from '@/stores/shop'

const shopStore = useShopStore()
const route = useRoute()
const router = useRouter()
const restoId = route.params.restoId
console.log('data ' + restoId)

try {
  await shopStore.getShopInfos()
  console.log('isLoading false')
  router.push({name:'home', params:{ restoId}});
} catch (error){
  console.log('error ....')

}


</script>
<template>
  loading
</template>