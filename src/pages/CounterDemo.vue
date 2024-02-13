<script setup>
import { useCounterStore } from 'stores/useCounterStore'
import { onMounted } from 'vue'

const counterStore = useCounterStore()

onMounted(counterStore.getPostCounts)
</script>

<template>
  <div>
    {{counterStore.count}}
  </div>
  <q-btn
    label="increment"
    @click="counterStore.increment"
  />
</template>

<style scoped>

</style>
