<template>
  <Home />
</template>
<script setup lang="ts"> 
import Home from '../components/pages/Home.vue';
definePageMeta({
  layout: "default"
})
useHead(head({
  name: "Home | RCN Lagos",
}))
</script>
<style lang="">
  
</style>