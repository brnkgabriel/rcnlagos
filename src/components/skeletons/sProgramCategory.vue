<template>
  <div class="-program -posrel">
    <img :src="program.image">
    <div class="-details">
      <h5 class="-name -subhead">{{ program.name }}</h5>
      <p class="-about">{{ program.about }}</p>
    </div>
    <div class="-time -posabs">{{ program.time }}</div>
  </div>
</template>
<script setup lang="ts">
import { iProgramCategory } from "~~/src/types/index"
defineProps<{
  program: iProgramCategory
}>()
</script>
<style scoped>
.-name,
.-about .-time {
  --tw-bg-opacity: 1;
  background-color: rgb(228 231 236 / var(--tw-bg-opacity));
}

.-program .-details .-name {
  line-height: 1;
  width: 75%;
  height: 16px;
}

.-program .-details .-about {
  width: calc(100% - 16px);
  height: 58px;
  margin-top: 8px;
  margin-bottom: 8px;
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
  bottom: 8px;
  right: 8px;
  background-color: var(--rcnlightbg) !important;
  height: 21px;
}

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

.-program .-time {}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>