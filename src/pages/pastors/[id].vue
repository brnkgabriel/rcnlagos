<template>
  <PastorProfile />
</template>
<script setup lang="ts">
import PastorProfile from "~/components/pages/PastorProfile.vue"

import { iPastorate } from '~~/src/types';
const params = useRoute().params
const id = params.id as string

const { globalState } = useGlobals()

const pastor = computed<iPastorate>(() => {
  const pst = globalState.value.pastorates?.filter((pastor: iPastorate) => id.toLowerCase() === slug(pastor))[0]
  return pst as iPastorate
})
definePageMeta({
  layout: "default"
})
useHead(head({
  name: pastor.value ? `${pastor.value?.name} | RCN Lagos` : `Pastor | RCN Lagos`,
}))
</script>
<style scoped>
  
</style>