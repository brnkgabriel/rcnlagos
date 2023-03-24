<template>
  <div class="-pastor relative">
    <div class="-img relative">
      <img class="-icon" src="/images/icon_500x500.png" alt="icon" />
      <img class="-picture absolute" :src="pastor.image" :alt="pastor.name" />
    </div>
    <div class="-detail">
      <h5 class="-name">{{ pastor.name }}</h5>
      <div class="-cta">
        <span>view profile</span>
        <span>🠒</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iPastorate } from '~~/src/types';

defineProps<{
  pastor: iPastorate
}>()
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
}

.-pastor .-img .-picture {
  top: 70%;
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

.-pastor .-icon {
  
}
@media screen and (max-width: 1024px) {
  
}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>