<script setup>
import { useCounterStore } from 'stores/useCounterStore'

const counterStore = useCounterStore()
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
