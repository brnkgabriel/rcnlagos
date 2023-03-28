<template>
  <div class="-program relative" :data-type="program.type">
    <img :src="src" :alt="program.theme" @click="playVideo" />
    <div class="-details">
      <div class="-name-time">
        <h5 class="-subhead -name">{{ program.theme }}</h5>
        <h5 class="-minister">{{ program.minister }}</h5>
        <div class="-time">{{ program.datetime }}</div>
      </div>
      <div class="-audio">
        <audio controls v-if="hasAudio">
          <source :src="program.audiourl" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div class="-ctas">
        <div class="-btns">
          <div class="-btn -play-video" @click="playVideo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd" />
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
        <div class="-type">
          {{ program.type }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iProgram } from '~~/src/types';
import { vShare } from '~/helpers/directives'
const props = defineProps<{
  program: iProgram;
}>()
const emit = defineEmits<{
  (e: 'selected', program: iProgram): void
}>()

const hasAudio = computed(() => (props.program.audiourl as string).length > 0)
const src = computed(() => props.program?.image ? props.program.image : youTubeThumbnail(props.program.videourl as string))


const playVideo = () => {
  emit("selected", props.program)
} 

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

.-program .-details .-name {
  text-transform: capitalize;
  line-height: 1.2;
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}


.-program .-details .-ctas,
.-program .-details .-ctas .-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.-program .-details .-ctas,
.-program .-details .-ctas .-btns {
  column-gap: 8px;
}

.-program .-details .-ctas .-type {
  font-size: .8em;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 50px;
  background-color: var(--orange-bg);
  border: 1px dashed var(--rcnaccentorange);
  color: var(--rcnaccentorange);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.-program[data-type="YouTube Short"] .-details .-ctas .-type {
  background-color: var(--red-bg);
  border: 1px dashed var(--red);
  color: var(--red);
}

.-program[data-type="10 Hours Prayer"] .-details .-ctas .-type {
  background-color: var(--green-bg);
  border: 1px dashed var(--green);
  color: var(--green);
}

.-program[data-type="The Convergence"] .-details .-ctas .-type {
  background-color: var(--blue-bg);
  border: 1px dashed var(--blue);
  color: var(--blue);
}
.-program[data-type="The Remnant Factor"] .-details .-ctas .-type {
  background-color: var(--purple-bg);
  border: 1px dashed var(--purple);
  color: var(--purple);
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

.-program[data-type="YouTube Short"] .-time {
  background-color: var(--red);
}

.-program[data-type="Community Bible Study"] .-time {
  background-color: var(--rcnaccentorange);
}

.-program[data-type="10 Hours Prayer"] .-time {
  background-color: var(--green);
}
.-program[data-type="The Convergence"] .-time {
  background-color: var(--blue);
}

.-program[data-type="The Remnant Factor"] .-time {
  background-color: var(--purple);
}

.-program .-details .-ctas .-minister {
  line-height: 1.2;
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
  .-program .-details .-name {
    font-size: 14px !important;
  }
}
</style>