<template>
  <div class="-contact">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Contact Us</h1>
          <p>Get in touch with us on our various channels</p>
        </div>
        <img class="-desktop" src="/images/partners_1511x495.jpg" alt="partners banner" />
        <img class="-mobile" src="/images/partners_1000x495.jpg" alt="partners banner" />
      </div>
      <div class="-form-contact-us">
        <form @submit.prevent="handleFormSubmission" class="-contact-form">
          <input class="-name" name="name" type="text" placeholder="Name" required />
          <input class="-email" name="email" type="email" placeholder="Email address" required />
          <input class="-phoneNumber" name="phoneNumber" type="tel" placeholder="Phone number (e.g. 08012345678)" required
            pattern="[0-9]{4}[0-9]{3}[0-9]{4}" />
          <input class="-subject" name="subject" type="text" placeholder="Subject" required />
          <textarea class="-message" placeholder="Message" name="inquiry" required></textarea>
          <button type="submit" class="-btn -posrel">
            <span class="-clickable -posabs" data-type="submit"></span>
            <span class="-spin-loader"></span>
            <span class="-txt">submit</span>
          </button>
          <p class="-status" data-type="error"></p>
        </form>
        <GetInTouch class="-getintouch" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iApiOptions, iMessage } from '~~/src/types';
import GetInTouch from '../partials/GetInTouch.vue';
import { useGtag } from "vue-gtag-next"

const { event } = useGtag()
const { globalState } = useGlobals()


const handleFormSubmission = (evt: Event) => {
  const form = evt.target as HTMLFormElement
  const formData = new FormData(form)
  const entries = Object.fromEntries(formData.entries())
  event('contactuspage_form', {
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
    id: constants.CONTACTUSID,
    dataToStore: {
      ...entries,
      date: new Date().toLocaleString(),
    },
    wrapperHTML: el(constants.CONTACTUSWRAPQUERY) as HTMLElement,
    statusHTML: el(constants.CONTACTUSSTATUSQUERY) as HTMLElement
  }

  postForm(apiOptions, messages, constants.CONTACTAPI)
}


</script>
<style scoped>
.-contact>.-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-contact .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
}

.-contact .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-contact .-hero-banner .-hero-title h1,
.-contact .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-contact .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-contact img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-form-contact-us {
  display: flex;
  column-gap: 16px;
  width: 100%;
}

.-contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  flex: 1;
}

.-getintouch {
  flex: 1;
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

  .-contact .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-contact .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-contact .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }
  
.-form-contact-us {
  flex-direction: column;
  column-gap: unset;
  row-gap: 16px;
}

  .-contact-form,
  .-form-contact-us {
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

  .-contact .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-contact .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>