<script setup>
import { onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import PostCard from 'components/PostCard.vue'
import { useRoute } from 'vue-router'

const post = ref({})
const { params: { postId } } = useRoute()
const loading = ref(false)
const isFavorite = ref(false)

const fetchPost = async () => {
  try {
    loading.value = true
    const { data } = await api.get(`posts/${postId}`)
    post.value = data
    loading.value = false
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

onMounted(fetchPost)
</script>

<template>
  <q-page padding>
    <PostCard :post="post" class="post-detail">
      <template #img-content>
        <div class="row justify-end q-pa-md absolute-full bg-transparent">
          <q-icon
            class="cursor-pointer"
            name="favorite"
            :color="isFavorite ? 'red': 'white'"
            size="2rem"
            @click="toggleFavorite"
          />
         </div>
      </template>
    </PostCard>
  </q-page>
</template>

<style scoped>
  .post-detail {
    width: 40rem;
    max-width: 90vw;
  }
</style>
