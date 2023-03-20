<template>
  <Blog />
</template>
<script setup lang="ts">
import Blog from '../components/pages/Blog.vue';

definePageMeta({
  layout: "default"
})
useHead(head({
  name: "Blog | RCN Lagos",
}))
</script>
<style lang="">
  
</style>