<template>
  <div class="-program">
    <img :src="program.image" :alt="program.theme" />
    <div class="-details">
      <h5 class="-subhead">{{ program.theme }}</h5>
      <div class="-ctas">
        <h5 class="-minister">{{ program.minister }}</h5>
        <div class="-btn">play</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iEvent } from '~~/src/types';

defineProps<{
  program: iEvent
}>()
</script>
<style scoped>
  
.-program {
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  cursor: pointer;
}
.-program img {
  width: 100%;
}

.-program .-details {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px;
}

.-program .-details > h5 {
  text-transform: capitalize;
  line-height: 1.2;
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.-program .-details .-ctas {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.-program .-details .-ctas .-minister {
  line-height: 1.2;
}
</style>