<template>
  <div class="-registration">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Registration</h1>
          <p class="-subline" v-if="showForm">Kindly register for the {{ globalState.upcomingPrograms[0].title }} below</p>
        </div>
        <img v-if="!showForm" class="-desktop" src="/images/1511x495.jpg" alt="desktop banner" />
        <img v-if="!showForm" class="-mobile" src="/images/1000x495.jpg" alt="mobile banner" />
        <img v-if="showForm" class="-desktop" :src="globalState.upcomingPrograms[0].desktopBanner" alt="desktop banner" />
        <img v-if="showForm" class="-mobile" :src="globalState.upcomingPrograms[0].mobileBanner" alt="mobile banner" />
      </div>
      <div class="-form-registration-us"> 
        <sRegistrationForm v-if="!showForm" />
        <RegistrationForm v-if="showForm" />
        <GetInTouch />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iUpcomingProgram } from '~~/src/types';
import GetInTouch from '../partials/GetInTouch.vue';
import RegistrationForm from '../partials/RegistrationForm.vue'
import sRegistrationForm from '../skeletons/sRegistrationForm.vue'

const { globalState } = useGlobals()

const showForm = computed(() => {
  const upcomingPrograms = globalState.value.upcomingPrograms ? (globalState.value?.upcomingPrograms as iUpcomingProgram[]) : []
  return upcomingPrograms.length > 0
}) 
</script>
<style scoped>
.-registration>.-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-registration .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
  width: 100%;
}

.-registration .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
} 

.-registration .-hero-banner .-hero-title h1,
.-registration .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-registration .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-registration img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-form-registration-us {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-registration-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-message {
  resize: none;
}
 
@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-registration .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-registration .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-registration .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

  .-registration-form,
  .-form-registration-us {
    grid-template-columns: repeat(1, 1fr)
  } 

}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) { 

  .-registration .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>