<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { api } from 'boot/axios'
import PostCard from 'components/PostCard.vue'
import { useRouter } from 'vue-router'

const posts = ref([])
const loading = ref(false)
const router = useRouter()

const filters = reactive({
  search: undefined
})

const mode = ref('list') // list or grid

const columns = [
  {
    name: 'title',
    label: 'Title',
    field: 'title',
    align: 'left'
  },
  {
    name: 'userId',
    label: 'User',
    field: 'userId',
    align: 'left'
  }
]

const isGrid = computed(() => mode.value === 'grid')

const fetchPosts = async () => {
  try {
    loading.value = true
    const { data } = await api.get('posts')
    posts.value = data
    loading.value = false
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}

const changeMode = (newMode) => {
  mode.value = newMode
}

const onFilter = (rows, terms) => rows.filter(row => row.title.includes(terms.trim()))

const onClickPost = (post) => {
  router.push(`posts/${post.id}`)
}

onMounted(fetchPosts)
</script>

<template>
  <q-page padding>
    <div class="q-pa-xs">
      <div class="cursor-pointer" v-if="!isGrid" @click.stop="changeMode('grid')">Grid</div>
      <div class="cursor-pointer" v-if="isGrid" @click.stop="changeMode('list')">List</div>
    </div>
    <div class="row q-mb-md">
      <div class="col-12 col-md-3">
        <q-input
          v-model="filters.search"
          label="Search"
          outlined
          dense
        />
      </div>
    </div>
    <q-table
      :loading="loading"
      :rows="posts"
      :columns="columns"
      :grid="isGrid"
      :filter="filters.search"
      :filter-method="onFilter"
    >
      <template v-slot:item="props">
        <PostCard class="cursor-pointer" :post="props.row" @click="onClickPost(props.row)" />
      </template>
    </q-table>
  </q-page>
</template>

<style scoped>

</style>
