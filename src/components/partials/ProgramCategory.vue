<template>
  <div class="-program -posrel shadow-custom">
    <img v-loaded class="opacity-0" :src="program.image">
    <div class="-details">
      <h5 class="-name -subhead">{{ program.name }}</h5>
      <p class="-about">{{ program.about }}</p>
    </div>
    <div class="-time -posabs">{{ program.time }}</div>
  </div>
</template>
<script setup lang="ts">
import { iProgramCategory } from "~~/src/types/index"
import { vLoaded } from "~~/src/helpers/directives";

defineProps<{
  program: iProgramCategory
}>()
</script>
<style scoped>
.-program {
  background-color: #fff;
  border-radius: 4px;
  padding-bottom: 16px;
}

.-program .-details {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 8px;
}

.-program img {
  width: 100%;
}

.-program .-details .-name {
  line-height: 1;
  margin-top: unset;
}

.-program .-time {
  bottom: 8px;
  right: 8px;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>