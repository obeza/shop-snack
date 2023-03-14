import { defineStore } from 'pinia'
import axiosClient from '../axios';

export const shopStore = defineStore({
  state: {
    shop:{
      rubrique:[],
      restoId: null
    }
  },
  getters: {
    shop:(state)=> state.shop,
  },
  actions: {
    getShopInfos(restoId) {
      console.log('getShop')
      // axiosClient.get( `/shop/${restoId}` )
      // .then((res) => {      
      //   console.log( "msg loaded : " + JSON.stringify(res.data ))
      // })
    }
  }
});