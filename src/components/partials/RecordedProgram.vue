<template>
  <div class="-program">
    <img :src="src" :alt="program.theme" />
    <div class="-details">
      <h5 class="-subhead">{{ program.theme }}</h5>
      <div class="-ctas">
        <div class="-name-time">
          <h5 class="-minister">{{ program.minister }}</h5>
          <div class="-time">{{ program.datetime }}</div>
        </div>
        <div class="-btn">play</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iEvent } from '~~/src/types';
const props = defineProps<{
  program: iEvent
}>()

const src = computed(() => props.program?.image ? props.program.image : youTubeThumbnail(props.program.videourl as string))

</script>
<style scoped>
.-program {
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
}

.-program img {
  width: 100%;
  aspect-ratio: 560 / 315;
  object-fit: cover;
}

.-program .-details {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px;
}

.-program .-details>h5 {
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

.-program .-details .-ctas .-name-time {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 4px;
}

.-program .-details .-ctas .-minister {
  line-height: 1.2;
}

@media screen and (min-width: 420px) and (max-width: 576px) {
  .-program .-details .-ctas .-name-time {
    width: calc(100% - 100px);
  }

  .-program .-details .-ctas .-name-time h5 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>