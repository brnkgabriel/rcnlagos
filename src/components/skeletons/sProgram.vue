<template>
  <div class="-program -posrel">
    <img
      :src="program.image">
    <div class="-details">
      <h5 class="-name">{{ program.name }}</h5>
      <p class="-about">{{ program.about }}</p>
    </div>
    <div class="-time -posabs">{{ program.time }}</div>
  </div>
</template>
<script setup lang="ts">
import { iProgram } from "~~/src/types/index"
defineProps<{
  program: iProgram
}>()
</script>
<style lang="">
  
</style>