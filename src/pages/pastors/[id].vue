<template>
  <PastorProfile />
</template>
<script setup lang="ts">
import PastorProfile from "~/components/pages/PastorProfile.vue"
 
definePageMeta({
  layout: "default"
})
useHead(head({
  name: `Pastor | RCN Lagos`,
}))
</script>
<style scoped>
  
</style>