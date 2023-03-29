<template>
  <div class="-pastor -posrel">
    <div class="-img -posrel">
      <img class="-icon" src="/images/680x680.png" alt="icon" /> 
    </div>
    <div class="-detail">
      <h5 class="-name">{{ pastor.name }}</h5>
      <div class="-cta">
        <span></span>
        <span></span>
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
  background-color: var(--rcnlightbg);
  width: 100%;
  height: 19.5px;
}

.-pastor .-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  padding: 8px;
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  width: 90%;
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

.-pastor .-img .-icon {}

.-pastor .-img .-picture {
  top: 70%;
}

.-pastor .-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  background-color: var(--rcnlightbg);
  width: 75%;
  height: 19.5px;
}

.-pastor .-cta span {
  text-transform: uppercase;
}

.-pastor .-icon {}
</style>