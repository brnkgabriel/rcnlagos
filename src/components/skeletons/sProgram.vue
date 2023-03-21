<template>
  <div class="-program relative">
    <img
      :src="program.image">
    <div class="-details">
      <h5 class="-name -subhead w-3/4 h-[16px] bg-rcnbg-900">{{ program.name }}</h5>
      <p class="-about h-[58px] bg-rcnbg-900 my-2">{{ program.about }}</p>
    </div>
    <div class="-time absolute h-[21px] bg-rcnbg-900">{{ program.time }}</div>
  </div>
</template>
<script setup lang="ts">
import { iProgram } from "~~/src/types/index"
defineProps<{
  program: iProgram
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

.-program .-details .-about {
  width: calc(100% - 16px);
}

.-program img {
  width: 100%;
}

.-program .-details .-name {
  line-height: 1;
}

.-program .-time {
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: .7em;
  font-weight: 600;
  letter-spacing: .3px;
  width: 31%;
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