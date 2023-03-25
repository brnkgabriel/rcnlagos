<template>
  <Pastors />
</template>
<script setup lang="ts">
import Pastors from '~/components/pages/Pastors.vue';

definePageMeta({
  layout: "default"
})
useHead(head({
  name: "Pastors | RCN Lagos",
}))
</script>
<style lang="">
  
</style>