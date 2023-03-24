<template>
  <div class="-pastors -row">
    <div class="-container -inner">
      <h1 class="-headfont">The Pastorates</h1>
      <div class="-catalog">
        <Pastor v-for="(pastor, idx) in globalState.pastorates" :key="idx" :pastor="pastor" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Pastor from '../partials/Pastor.vue';
const { globalState } = useGlobals()
</script>
<style scoped>
.-pastors {
  background-color: var(--rcnlightbg);
}

.-pastors .-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
}

.-pastors .-headfont {
  font-size: 60px;
  font-weight: bold;
  text-transform: capitalize;
}

.-pastors .-catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {
  .-pastors .-catalog {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 576px) {

  .-pastors .-catalog {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>