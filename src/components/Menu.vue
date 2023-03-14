<script setup lang="ts">
import { ref,defineProps } from 'vue'

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
      Stoner is a 1965 novel by the American writer John Williams.
    </n-drawer-content>
  </n-drawer>

</template>