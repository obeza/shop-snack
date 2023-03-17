import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axiosClient from '@/axios/';

import { useRoute, useRouter } from 'vue-router';


export const useShopStore = defineStore('shopSnack', () => {

  console.log('#### STORE #####')

  // const shop = ref({
  //   rubriques:[],
  //   isLoading: true
  // })
  const rubriques = ref([])
  const isLoading = ref(true)
  const restoId = ref("")


  const dataShop = computed(()=> {
    console.log('computed data...')
    if (rubriques.value.length){
      console.log('get data ...' + rubriques.value)
      return rubriques.value
    } else {
      console.log('reload app ...')
      const router = useRouter()
      const route = useRoute()
      let id = route.params.restoId
      router.push({name:'start', params:{ id}});
    }
  })

  function getShopInfos(resto_id:string){
    console.log('getShop' + restoId)

    return new Promise((resolve, reject)=>{

      try {
        axiosClient.get( `/shop/${resto_id}` )
        .then(response =>{
          console.log( "msg loaded : ", response.data )

          rubriques.value = response.data.shop
          restoId.value = resto_id
          isLoading.value = false
          resolve(null)
        })

        
      }catch(error){
        console.log('getShopinfos error ' + error)
        reject()
      }

    })
  }

  function getRubrique(rubId){

      let rubrique = rubriques.value.find(rub => rub.id= rubId).articles
      console.log('rubrique ' + JSON.stringify( rubrique))
      return rubrique

  }

  return {
    isLoading,
    restoId,
    rubriques, 
    getRubrique,
    dataShop, 
    getShopInfos
  }
})

export default useShopStore