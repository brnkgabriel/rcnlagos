<template>
  <Departments />
</template>
<script setup lang="ts">
import Departments from '../components/pages/Departments.vue';
definePageMeta({
  layout: "default"
})
useHead(head({
  name: "Departments | RCN Lagos",
}))
</script>
<style lang="">
  
</style>