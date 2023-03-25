<template>
  <President />
</template>
<script setup lang="ts">
import President from '../components/pages/President.vue';
definePageMeta({
  layout: "default"
})
useHead(head({
  name: "President | RCN Global",
}))
</script>
<style lang="">
  
</style>