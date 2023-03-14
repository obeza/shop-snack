import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axiosClient from '@/axios/';

import { useRoute, useRouter } from 'vue-router';


export const useShopStore = defineStore('shop', () => {

  console.log('#### STORE #####')
  
  const route = useRoute()
  const router = useRouter()

  const restoId = route.params.restoId
  console.log("🚀 ~ file: shop.ts:13 ~ useShopStore ~ restoId:", restoId)

  const shop = ref({
    rubriques:[],
    isLoading: true
  })

  //const isLoading = ref(true)

  //const doubleCount = computed(() => count.value * 2)
  const dataShop = computed(()=> {
    if (shop.value.rubriques.length>0){
      return shop.value.rubriques
    } else {
      router.push({name:'start', params: { restoId } });
    }
  })

  async function getShopInfos(){
    console.log('getShop' + restoId)
    if (shop.value.restoId==null){

    }
    await axiosClient.get( `/shop/${restoId}` )
    .then((res) => {      
      console.log( "msg loaded : " + JSON.stringify(res.data ))
    })
  }

  return { dataShop, shop, getShopInfos }
})

export default useShopStore