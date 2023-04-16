<template>
  <NuxtLink :href="href" class="-pastor -posrel">
    <div class="-img -posrel">
      <img class="-icon" src="/images/icon_500x500.png" alt="icon" />
      <img v-loaded class="-picture -posabs opacity-0" :src="pastor.image" :alt="pastor.name" />
    </div>
    <div class="-detail">
      <div class="-name"> 
        <h5 class="-title">{{ pastor.title }}</h5>
        <h5 class="-names">{{ pastor.name }}</h5>
      </div>
      <div class="-cta">
        <span>view profile</span>
        <span class="-right-arrow"></span>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import { iPastorate } from '~~/src/types';
import { vLoaded } from '~~/src/helpers/directives';

const props = defineProps<{
  pastor: iPastorate
}>()
 
const href = ref(`/pastors/${slug(props.pastor)}`)
</script>

<style scoped>
.-pastor {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  background-color: white;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  padding: 8px;
}

.-pastor .-name {
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.-pastor .-detail {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 8px;
  background-color: white; 
  border-radius: 4px;
}

.-pastor .-img { 
  overflow: hidden;
  background-color: white;
  width: 80%;
  aspect-ratio: 500 / 500; 
}

.-pastor .-picture {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.-pastor .-img .-icon {
  width: 100%;
}

.-pastor .-img .-picture {
  width: 100%; 
}

.-pastor .-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
}

.-pastor .-cta span {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 600;
}

.-pastor .-cta .-right-arrow {
  width: 16px;
  height: 16px;
  position: relative;
}

.-pastor .-cta .-right-arrow::before,
.-pastor .-cta .-right-arrow::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
}

.-pastor .-cta .-right-arrow::before {
  width: 6px;
  height: 6px;
  border: 2px solid var(--rcntext);
  border-left: unset;
  border-bottom: unset;
  transform: translate(-20%, -55%) rotate(45deg);
}

.-pastor .-cta .-right-arrow::after {
  width: 8px;
  height: 2px;
  background-color: var(--rcntext);
  transform: translate(-50%, -55%);
}

.-pastor .-icon {}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {
  .-pastor .-img {
    width: 100%;
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>