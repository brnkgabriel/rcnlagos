<template>
  <About />
</template>
<script setup lang="ts">

import About from '../components/pages/About.vue';

definePageMeta({
  layout: "default"
})

useHead(head({
  name: "About | RCN Lagos",
}))
</script>
<style lang="">
  
</style>