import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axiosClient from '@/axios/';

export const useShopStore = defineStore('shopSnack', () => {

  console.log('#### STORE #####')

  // const shop = ref({
  //   rubriques:[],
  //   isLoading: true
  // })
  //const rubriques = ref([])
  const isLoading = ref(true)

  //const isLoading = ref(true)

  //const doubleCount = computed(() => count.value * 2)
  // const dataShop = computed(()=> {
  //   console.log('computed data...')
  //   return rubriques.value
    // if (shop.value.rubriques){
    //   console.log('get data ...' + shop.value.rubriques)
    //   return shop.value.rubriques
    // } else {
    //   console.log('reload app ...')
    //   router.push({name:'start', params: { restoId } });
    // }
  //})

  async function getShopInfos(restoId:string){
    console.log('getShop' + restoId)

    try {
      const res = await axiosClient.get( `/shop/${restoId}` )
      console.log( "msg loaded : ", res.data )

      isLoading.value = false
    }catch(error){
      console.log('getShopinfos error ' + error)
    }
    
  }

  return {isLoading, getShopInfos}
})

export default useShopStore