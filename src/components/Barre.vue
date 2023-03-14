<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'
import { 
  MenuFilled,
  ShoppingBagFilled,
  ShoppingBagOutlined,
  DeliveryDiningOutlined
} from '@vicons/material'

const menuActive= ref({
  show:false
})
</script>

<template>
  <div class="header spaceIcon">

    <span class="alignCenter">
      <n-button quaternary size="large" @click="menuActive.show=true">
        <template #icon>
          <n-icon><menu-filled /></n-icon>
        </template>
      </n-button>
    </span>

    <span class="alignCenter">
      <n-button quaternary size="large" >
        <n-badge value="14">
          <n-icon><shopping-bag-outlined /></n-icon>
        </n-badge>
      </n-button>
      <n-button quaternary size="large">
      <template #icon>
        <n-icon><delivery-dining-outlined /></n-icon>
      </template>
      </n-button>
    </span>
  </div>

  <Menu v-model:show="menuActive.show"/>

</template>

<style scoped>
.header{
  position:fixed;
  width:100vw;
  height: 50px;
  background-color: #B3FFAE;
  padding:0;
  margin:0;
  top:0;
  font-size: 36px;
}
.spaceIcon{
  display:flex;
  justify-content: space-between;
  
}
.alignCenter {
  display:flex;
  align-items: center;
  
}
.alignCenter i {
  font-size: 34px;
  color:#000;
}
.menu{
  align-items: center;
}
</style>