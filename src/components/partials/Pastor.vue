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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clip-rule="evenodd" />
        </svg>

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
  border-radius: 50%;
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
  font-weight: 500;
}

.-pastor .-cta .-right-arrow {
  width: 16px;
  height: 16px;
  position: relative;
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

@media screen and (min-width: 320px) and (max-width: 420px) {}</style>