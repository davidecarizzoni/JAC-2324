import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api } from 'boot/axios'

// getters -> functions that return a value
// mutations -> functions that change the state

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const postCount = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)

  // mutation that increments the count
  function increment () {
    count.value++
  }

  async function getPostCounts () {
    const { data } = await api.get('posts')
    postCount.value = data.length
  }

  return { count, name, postCount, doubleCount, increment, getPostCounts }
})
