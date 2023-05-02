<template>
  <div class="-prayer-request">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Prayer Request</h1>
          <p class="-subline">Submit your request and
            experience the peace that comes from knowing you are never alone, and that God hears your
            every prayer.</p>
        </div>
        <img class="-desktop" src="/images/partners_1511x495.jpg" alt="partners banner" />
        <img class="-mobile" src="/images/partners_1000x495.jpg" alt="partners banner" />
      </div>
      <div class="-prayer-request-form-wrap">
        <form @submit.prevent="handleFormSubmission" class="-prayer-request-form">
          <input class="-name" name="name" type="text" placeholder="Name" required />
          <input class="-email" name="email" type="email" placeholder="Email address" required />
          <PhoneNumberInput @entered="handlePhoneNumber" />
          <textarea class="-message" placeholder="Your Prayer Request" name="prayerrequest" required></textarea>
          <button type="submit" class="-btn -posrel">
            <span class="-clickable -posabs" data-type="submit"></span>
            <span class="-spin-loader"></span>
            <span class="-txt">submit</span>
          </button>
          <p class="-status" data-type="error"></p>
        </form>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iApiOptions, iMessage } from '~~/src/types';
import GetInTouch from '../partials/GetInTouch.vue';
import PhoneNumberInput from '../partials/PhoneNumberInput.vue';
import { useGtag } from "vue-gtag-next"

const { event } = useGtag()

const { globalState } = useGlobals()

const pNumber = ref("")
const handlePhoneNumber = (number: string) => pNumber.value = number

const handleFormSubmission = (evt: Event) => {
  const form = evt.target as HTMLFormElement
  const formData = new FormData(form)
  const entries = Object.fromEntries(formData.entries())
  
  entries.phoneNumber = pNumber.value

  event('prayerrequestpage_form', {
    'name': entries.name,
    'email': entries.email,
    'phoneNumber': entries.phoneNumber,
    'value': 1
  })

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
  width: 100%;
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

  .-prayer-request .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}</style>