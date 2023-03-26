<template>
  <div class="-program relative">
    <img :src="src" :alt="program.theme" />
    <div class="-details">
      <h5 class="-subhead">{{ program.theme }}</h5>
      <div class="-name-time">
        <h5 class="-minister">{{ program.minister }}</h5>
        <div class="-time">{{ program.datetime }}</div>
      </div>
      <div class="-audio">
        <audio controls  v-if="hasAudio">
          <source :src="program.audiourl" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div class="-ctas">
        <NuxtLink v-if="hasAudio" class="-btn -download" download :href="program.audiourl">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            viewBox="0 0 32 32" class="w-4 h-4">
            <title>download</title>
            <path
              d="M16 18l8-8h-6v-8h-4v8h-6zM23.273 14.727l-2.242 2.242 8.128 3.031-13.158 4.907-13.158-4.907 8.127-3.031-2.242-2.242-8.727 3.273v8l16 6 16-6v-8z">
            </path>
          </svg>
        </NuxtLink>
        <div class="-btn -play-video" @click="playVideo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path
              d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
          </svg>
        </div>
        <div class="-btn -share" :data-title="program.theme" :data-url="program.videourl" v-share>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd"
              d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div class="absolute -status">...</div>
  </div>
</template>
<script setup lang="ts">
import { iProgram } from '~~/src/types';
import { vShare } from '~/helpers/directives'
const props = defineProps<{
  program: iProgram; 
}>()

const hasAudio = computed(() => (props.program.audiourl as string).length > 0)
const src = computed(() => props.program?.image ? props.program.image : youTubeThumbnail(props.program.videourl as string))


const playVideo = () => { }
const playAudio = () => { }
const downloadAudio = () => { }
const copyLink = () => { }

</script>
<style scoped>
.-program {
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  overflow: hidden;
}

.-program img {
  width: 100%;
  aspect-ratio: 560 / 315;
  object-fit: cover;
  cursor: pointer;
}

.-program .-details {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px;
}

.-program .-details .-audio {
  height: 54px;
}

.-program .-details .-audio audio {
  width: 100%;
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
  justify-content: flex-start;
  column-gap: 8px;
}


.-program .-details .-ctas .-btn {
  padding: unset !important;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.-program .-details .-name-time {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 4px;
}

.-program .-details .-ctas .-minister {
  line-height: 1.2;
}

.-status {
  color: var(--rcntext);
  font-weight: 600;
  top: 100%;
  right: 8px;
  transform: translate(0%, calc(-50% - 22px));
}

@media screen and (min-width: 420px) and (max-width: 576px) {
  .-program .-details .-ctas .-name-time {
    width: calc(100% - 72px);
  }

  .-program .-details .-ctas .-name-time h5 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: 768px) {
  .-program .-details>h5 {
    font-size: 14px !important;
  }
}
</style>