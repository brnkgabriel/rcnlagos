<template>
  <div>
    <PrayerRequest />
  </div>
</template>
<script setup lang="ts">
import PrayerRequest from '../components/pages/PrayerRequest.vue';
definePageMeta({
  layout: "default"
})
useHead(head({
  name: "Request | RCN Lagos",
}))
</script>
<style lang="">
  
</style>