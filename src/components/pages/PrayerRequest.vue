<template>
  <div class="-prayer-request">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Prayer Request</h1>
          <p>Submit your prayer request and join a community of believers who believe in the power of intercession and experience the peace that comes from knowing you are never alone in your struggles, and that God hears your every prayer.</p>
        </div>
        <img class="-desktop" src="/images/partners_1511x495.jpg" alt="partners banner" />
        <img class="-mobile" src="/images/partners_1000x495.jpg" alt="partners banner" />
      </div>
      <div class="-prayer-request-form-wrap">
        <form @submit.prevent="handleFormSubmission" class="-prayer-request-form">
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
        <div class="-prayer-request-details">
          <h5 class="-subhead">Get in touch</h5>
          <div class="-prayer-request-channels">
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
    id: constants.PRAYERREQUESTID,
    dataToStore: {
      ...entries,
      date: new Date().toLocaleString(),
    },
    wrapperHTML: el(constants.PRAYERREQUESTWRAPQUERY) as HTMLElement,
    statusHTML: el(constants.PRAYERREQUESTSTATUSQUERY) as HTMLElement
  }

  postForm(apiOptions, messages, constants.PRAYERREQUESTAPI)
}


</script>
<style scoped>
.-prayer-request>.-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-prayer-request .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
}

.-prayer-request .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-prayer-request .-hero-banner .-hero-title h1,
.-prayer-request .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-prayer-request .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-prayer-request img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-prayer-request-form-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-prayer-request-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-prayer-request-details {
  background-color: var(--rcnaccentblue);
  color: white;
  padding: 16px;
}

.-prayer-request-details .-subhead {}

.-prayer-request-details .-prayer-request-channels {
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

  .-prayer-request .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-prayer-request .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-prayer-request .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

  .-prayer-request-form,
  .-prayer-request-form-wrap {
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

  .-prayer-request .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-prayer-request .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>