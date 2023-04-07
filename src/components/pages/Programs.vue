<template>
  <div class="-programs" id="programs">
    <ProgramModal ref="programModal" :program="selectedProgram" />
    <div class="-inner px-4 -posrel">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs -caption">
          <h1 class="-headfont -mainline">Encounter the Word</h1>
          <p class="-subline">Explore our programs and get notified of upcoming programs.</p>
        </div>
        <div class="-upcoming-program -posabs" v-if="showUpcoming">
          <div class="-left">
            <h5 class="-subhead">upcoming program</h5>
            <p>{{ globalState.upcomingPrograms[0].title }}</p>
          </div>
          <NuxtLink href="/registration" class="-btn -subscribe">Register</NuxtLink>
        </div>
        <img v-if="showUpcoming" class="-desktop" :src="globalState.upcomingPrograms[0].desktopBanner" alt="desktop banner" />
        <img v-if="showUpcoming" class="-mobile" :src="globalState.upcomingPrograms[0].mobileBanner" alt="mobile banner" />
        <img v-if="!showUpcoming" class="-desktop" src="/images/1511x495.jpg" alt="desktop banner" />
        <img v-if="!showUpcoming" class="-mobile" src="/images/1000x495.jpg" alt="mobile banner" />
      </div>
      <div class="-catalog" v-infinite-scroll>
        <Program v-if="isLoaded" v-for="(program, idx) in globalState.renderedPrograms" :key="idx" :program="program"
          :class="(idx === globalState.renderedPrograms.length - 1) ? '-lastprogram' : ''" @selected="showProgram" />
        <div v-if="isLoaded && globalState.renderedPrograms.length == 0">No results</div>
        <sProgram v-if="!isLoaded" v-for="(program, idx) in skeletonPrograms" :key="idx" :program="program" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iProgram, iUpcomingProgram } from '~~/src/types';
import Program from '../partials/Program.vue';
import sProgram from '../skeletons/sProgram.vue';
import ProgramModal from '../partials/ProgramModal.vue';
import { vInfiniteScroll } from "~/helpers/directives"
import { useGtag } from "vue-gtag-next"

const { event } = useGtag()

const { globalState } = useGlobals()

const selectedProgram = ref<iProgram>(skeletonPrograms[0])
const isLoaded = computed(() => (globalState.value.programs as iProgram[]).length)
const showUpcoming = computed(() => {
  const upcomingPrograms = globalState.value.upcomingPrograms ? (globalState.value?.upcomingPrograms as iUpcomingProgram[]) : []
  return upcomingPrograms.length > 0
}) 


const programModal = ref()

const showProgram = (program: iProgram) => {
  event('programspage_selectprogram', {
    'title': program.title,
    'type': program.type,
    'value': 1
  })
  programModal.value.isOpen = true
  selectedProgram.value = program
}

</script>
<style scoped>
.-programs {
  background-color: var(--rcnlightbg);
}

.-hero-section .-video {
  width: 100%;
  height: 100%;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%);
  border-radius: 4px;
  z-index: 2;
  opacity: 0;
}


.-mobile {
  display: none;
}

.-hero-section .-video.show {
  opacity: 1;
  left: 50%;
  transform: translate(-50%, -50%);
}

.-hero-section .-filters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  z-index: 2;
  background-color: #fff;
  padding: 8px;
  top: 72px;
  left: 0;
  z-index: 3;
}

.-hero-section .-filters .-categories .-select-category-icon,
.-hero-section .-filters .-search .-search-icon {
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  width: 24px;
  height: 24px;
}

.-hero-section .-filters #selectCategory,
.-hero-section .-filters .-search .-search-input {
  padding-left: 56px;
  height: 40px;
  width: 100%;
  border-radius: 8px;
}

.-hero-section .-filters .-program-selection {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
}

.-hero-banner .-caption { 
  left: 8px; 
  top: 40%;
  transform: translateY(-50%);
  width: calc(100% - 16px);
  z-index: 1;
  text-align: center;
}

.-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
} 

.-hero-banner .-caption .-mainline {
  color: white;
  font-size: 60px;
  line-height: 1;
  font-weight: bold;
}

.-hero-banner .-caption .-subline {
  color: white;
}

.-hero-banner .-caption .-subscribe.-btn {
  width: fit-content;
}

.-hero-banner img {
  opacity: .2;
  width: 100%;
}


.-hero-banner .-upcoming-program {
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 100%;
  z-index: 1;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.-hero-banner .-upcoming-program .-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.-hero-banner .-upcoming-program .-subscribe {
  padding: 8px 16px;
}

.-hero-banner .-upcoming-program h5,
.-hero-banner .-upcoming-program p,
.-hero-banner .-upcoming-program span {
  color: white;
}

.-hero-banner .-upcoming-program h5 {
  text-transform: uppercase;
}


.-programs .-catalog {
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media screen and (max-width: 1024px) {
  .-hero-section .-filters {
    display: none;
  }

  .-hero-banner .-caption {
    width: calc(100% - 16px);
    left: 8px;
    row-gap: 4px;
  }

  .-programs .-catalog {
    grid-template-columns: repeat(3, 1fr);
  }

}

@media screen and (max-width: 768px) {

  .-hero-banner {
    grid-template-columns: repeat(1, 1fr);
  }

  .-hero-banner .-shorts {
    display: none;
  }

  .-hero-banner .-caption .-mainline {
    font-size: 32px;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-hero-banner {
    aspect-ratio: 1500 / 844;
  }
}


@media screen and (max-width: 576px) {

  .-programs .-catalog {
    grid-template-columns: repeat(2, 1fr);
  }

}

@media screen and (max-width: 420px) {

  .-programs .-catalog {
    grid-template-columns: repeat(1, 1fr);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {

  .-hero-banner .-upcoming-program h5,
  .-hero-banner .-upcoming-program p {
    font-size: .8em !important;
  }

  .-hero-banner .-upcoming-program p {
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
    text-overflow: ellipsis;
  }

  .-hero-banner .-upcoming-program {
    padding: 8px;
  }

  .-hero-banner .-caption .-mainline {
    font-size: 32px;
  }

  .-hero-banner .-caption .-subline {
    font-size: 12px;
  }
}

@media screen and (max-height: 567px) and (orientation: landscape) {

  /* phone landscape styles */
}
</style>