<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Barre from './components/Barre.vue'



</script>

<template>
  
    
    <div class="contenu">
      <RouterView />
    </div>
  
</template>

<style scoped>

.contenu {
  width: 100vw;
  top:64px;
  bottom:0px;
  position:3;
  margin:0;
  padding:0;
}
.isLoading { 
  text-align: center;
  margin-top:160px;
}
</style>
