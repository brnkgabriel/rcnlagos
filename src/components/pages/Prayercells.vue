<template>
  <div class="-prayercells">
    <div class="-cells-wrap -inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Prayer Cells</h1>
          <p>As iron sharpens iron, so one person sharpens another. RCN Lagos has prayer centers in various locations in
            Lagos
            for the purpose of convenience and continual fellowship. We meet once every week. Check out the details below.
          </p>
        </div>
        <img class="-desktop" src="/images/prayercells_1511x495.jpg" alt="prayercell banner" />
        <img class="-mobile" src="/images/prayercells_1000x495.jpg" alt="prayercell banner" />
      </div>
      <div class="-cells">
        <Prayercell v-if="isLoaded" v-for="(cell, idx) in globalState.prayercells" :key="idx" :cell="cell" />
        <sPrayercell v-if="!isLoaded" v-for="(_, idx) in skeletonPrayercells" :key="idx" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iPrayercell } from '~~/src/types';
import Prayercell from '../partials/Prayercell.vue';
import sPrayercell from '../skeletons/sPrayercell.vue';

const { globalState } = useGlobals()

const isLoaded = computed(() => (globalState.value.prayercells as iPrayercell[]).length > 0)
</script>
<style scoped>
.-prayercells {
  background-color: var(--rcnlightbg);
}

.-cells-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-prayercells .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
}

.-prayercells .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-prayercells .-hero-banner .-hero-title h1,
.-prayercells .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-prayercells .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-prayercells img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-cells {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0 auto;
}

.-cells .-cell {
  background-color: white;
  text-align: center;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-cells {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .-prayercells .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-prayercells .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-prayercells .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

}

@media screen and (max-width: 576px) {

  .-cells {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  } 

}

@media screen and (max-width: 420px) {

  .-cells {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  .-prayercells .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-prayercells .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }
}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>