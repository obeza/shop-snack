<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import Barre from '@/components/Barre.vue'
import useShopStore from '@/stores/shop'

const route = useRoute()
const router = useRouter()

const rubriqueId = route.params.rubriqueId

const shopStore = useShopStore()

const getRubrique = shopStore.getRubrique(rubriqueId)
console.log("🚀 ~ file: RubriqueView.vue:13 ~ rubrique:", getRubrique)

const rubrique = ref(getRubrique)


</script>

<template>
  <Barre />
  <main class="contenu">
    <h1>Ribrique</h1>
    <n-space vertical>
      <n-card
      class="article-card" 
      v-for="article in rubrique" :key="article.id"
      >
      
        <h3>{{  article.titre }}</h3>
        <span>oups</span>
        
      </n-card>
    </n-space>
  </main>
  
</template>

<style scoped>
.contenu div{

}
.article-card{
  width:90vw;
  margin-left:5vw;

}
.n-card__content {
  color:blue;
}
.n-card__content {
  width:100%;
  
}
</style>
