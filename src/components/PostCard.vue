<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
        <slot name="img-content"/>
      </q-img>

      <q-card-section>
        <div class="text-h6 ellipsis">{{ post.title}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="ellipsis-2-lines">
          {{ post.body }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>

</style>
