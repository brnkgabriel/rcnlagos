<template>
  <div class="-testimony">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Testimony</h1>
          <p>Share your testimony with us and be a source of encouragement to fellow brothers and sisters going through what you went through</p>
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
        <div class="-testimony-details">
          <h5 class="-subhead">Get in touch</h5>
          <div class="-testimony-channels">
            <p>Academy Guest House, Plot 6A Lateef Jakande Rd. Agidingbi 101212, Ikeja</p>
            <a href="tel:+2348186253251" class="-phone">(+234) 818 625 3251</a>
            <a href="tel:+2349061767430" class="-phone">(+234) 906 176 7430</a>
            <a href="mailto:info@rcnlagos.org?subject=Ministry Inquiries" class="-email">info@rcnlagos.org</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iApiOptions, iMessage } from '~~/src/types';

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

.-testimony-details {
  background-color: var(--rcnaccentblue);
  color: white;
  padding: 16px;
}

.-testimony-details .-subhead {}

.-testimony-details .-testimony-channels {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: flex-start;
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