<script setup lang="ts">
import { ref,defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import {useShopStore} from '@/stores/shop'

const router = useRouter()
const shopStore = useShopStore()

const menuList = ref(shopStore.dataShop)
console.log("🚀 ~ file: Menu.vue:10 ~ menuList:", menuList)
const restoId = ref(shopStore.restoId)

let props = defineProps({
  show: Boolean,
})

const emits = defineEmits([
  'update:show',
])

</script> 

<template>
  <n-drawer :show="show" width="100%" placement="left">
    <n-drawer-content>
      <div>
        <n-button quaternary size="large" @click="emits('update:show',false)">
        <template #icon>
          <n-icon><menu-filled /></n-icon>
        </template>
        Fermer
      </n-button>
      </div>
      <div>
        <n-space vertical>
          <n-button 
          v-for="rub in menuList" :key="rub.id"
          strong secondaryc block round type="error"
          @click="router.push({name:'rubrique', params: { restoId, rubriqueId:rub.id} })"
          >
            {{ rub.titre }}
          </n-button>
        </n-space>
      </div>
    </n-drawer-content>
  </n-drawer>

</template>


<style>
.n-button .n-button__content {
  font-size:26px;
}
</style>