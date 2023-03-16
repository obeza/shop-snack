<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import {useShopStore} from '@/stores/shop'
import {useCounterStore} from '@/stores/counter'

const shopStore = useShopStore()
const route = useRoute()
const router = useRouter()
const restoId = route.params.restoId
console.log('data ' + restoId)

const counter = useCounterStore()

counter.increment()
console.log( 'count ' + counter.count)

try {
  shopStore.getShopInfos(restoId)
  console.log('isLoading ' + shopStore.isLoading)
  router.push({name:'home', params:{ restoId}});
} catch (error){
  console.log('error ....')

}


</script>
<template>
  loading
</template>