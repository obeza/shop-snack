<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Barre from './components/Barre.vue'



</script>

<template>
  
    
    <div>
      <RouterView />
    </div>
  
</template>

<style scoped>


.isLoading { 
  text-align: center;
  margin-top:160px;
}
</style>
