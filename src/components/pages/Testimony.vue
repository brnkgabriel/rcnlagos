<template>
  <div class="-testimony">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Testimony</h1>
          <p>Your story could be the one that inspires someone else to turn their life towards Christ. Join us in spreading the Good News and glorifying God through the power of personal testimonies.</p>
        </div>
        <img class="-desktop" src="/images/partners_1511x495.jpg" alt="partners banner" />
        <img class="-mobile" src="/images/partners_1000x495.jpg" alt="partners banner" />
      </div>
      <div class="-testimony-form-wrap">
        <form @submit.prevent="handleFormSubmission" class="-testimony-form">
          <input class="-name" name="name" type="text" placeholder="Name" required />
          <input class="-email" name="email" type="email" placeholder="Email address" required />
          <input class="-phoneNumber" name="phoneNumber" type="tel" placeholder="Phone number (e.g. 08012345678)" required
            pattern="[0-9]{4}[0-9]{3}[0-9]{4}" /> 
          <textarea class="-message" placeholder="Your Testimony" name="testimony" required></textarea>
          <button type="submit" class="-btn -posrel">
            <span class="-clickable -posabs" data-type="submit"></span>
            <span class="-spin-loader"></span>
            <span class="-txt">submit</span>
          </button>
          <p class="-status" data-type="error"></p>
        </form>
        <GetInTouchVue />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iApiOptions, iMessage } from '~~/src/types';
import GetInTouchVue from '../partials/GetInTouch.vue';

const { globalState } = useGlobals()

const handleFormSubmission = (evt: Event) => {
  const form = evt.target as HTMLFormElement
  const formData = new FormData(form)
  const entries = Object.fromEntries(formData.entries())

  const messages: iMessage = {
    errorMessage: "Already requested",
    successMessage: "Successfully submitted"
  }
  const apiOptions: iApiOptions = {
    collection: constants.RCNLAGOSCOLLECTION,
    id: constants.TESTIMONYID,
    dataToStore: {
      ...entries,
      date: new Date().toLocaleString(),
    },
    wrapperHTML: el(constants.TESTIMONYWRAPQUERY) as HTMLElement,
    statusHTML: el(constants.TESTIMONYSTATUSQUERY) as HTMLElement
  }

  postForm(apiOptions, messages, constants.TESTIMONYAPI)
}


</script>
<style scoped>
.-testimony>.-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-testimony .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
}

.-testimony .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-testimony .-hero-banner .-hero-title h1,
.-testimony .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-testimony .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-testimony img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-testimony-form-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-testimony-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-phoneNumber,
.-subject,
.-message {
  grid-column-start: 1;
  grid-column-end: 3;
}

.-message {
  resize: none;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-testimony .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-testimony .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-testimony .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

  .-testimony-form,
  .-testimony-form-wrap {
    grid-template-columns: repeat(1, 1fr)
  }

  .-phoneNumber,
  .-subject,
  .-message {
    grid-column-start: 1;
    grid-column-end: 2;
  }
}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {

  .-testimony .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-testimony .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>