<template>
  <NuxtLink :href="href" class="-pastor -posrel">
    <div class="-img -posrel">
      <img class="-icon" src="/images/icon_500x500.png" alt="icon" />
      <img v-loaded class="-picture -posabs opacity-0" :src="pastor.image" :alt="pastor.name" />
    </div>
    <div class="-detail">
      <h5 class="-name">{{ name }}</h5>
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

const name = ref(`${props.pastor.title} ${props.pastor.name}`)
const href = ref(`/pastors/${slug(props.pastor)}`)
</script>

<style scoped>
.-pastor {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
}

.-pastor .-name {
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
}

.-pastor .-detail {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 8px;
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
}

.-pastor .-img {
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  box-shadow: var(--box-shadow);
}

.-pastor .-picture {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  border: 1px solid var(--rcntext);
  border-left: unset;
  border-bottom: unset;
  transform: translate(-35%, -50%) rotate(45deg);
}

.-pastor .-cta .-right-arrow::after {
  width: 12px;
  height: 1px;
  background-color: var(--rcntext);
  transform: translate(-45%, -50%);
}

.-pastor .-icon {}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>