<template>
  <div class="-program relative">
    <img src="/images/560x315.png" alt="program skeleton image" />
    <div class="-details">
      <div class="-name-time">
        <h5 class="-subhead -name">{{ program.title }}</h5>
        <h5 class="-minister">{{ program.minister }}</h5>
        <div class="-time">{{ program.datetime }}</div>
      </div>
      <div class="-audio">
      </div>
      <div class="-ctas">
        <div class="-btns"> 
          <div class="-btn"></div>
          <div class="-btn"></div>
        </div> 
        <div class="-type"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iProgram } from '~~/src/types'; 
const props = defineProps<{
  program: iProgram;
}>()
const emit = defineEmits<{
  (e: 'selected', program: iProgram): void
}>()

const hasAudio = computed(() => (props.program.audiourl as string).length > 0)

const playVideo = () => {
  emit("selected", props.program)
}

</script>
<style scoped>
.-program .-details .-name,
.-program .-details .-minister,
.-program .-details .-time,
.-program .-details .-audio,
.-program .-details .-ctas .-btn,
.-program .-details .-ctas .-type {
  background-color: var(--rcnlightbg) !important;
}

.-program .-details .-name {
  width: 100%;
  height: 19.5px;
}

.-program .-details .-minister {
  width: 80%;
  height: 19.5px;
}

.-program .-details .-time {
  width: 40%;
  height: 21.65px;
}

.-program .-details .-ctas .-btn {
  box-shadow: unset !important;
}

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
  width: 100%;
  border-radius: 50px;
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

.-program .-details .-ctas {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
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
  width: 50%;
  height: 33px;
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