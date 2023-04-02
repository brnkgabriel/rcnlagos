<template>
  <div class="-registration">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Registration</h1>
          <p>Kindly register for the upcoming events below</p>
        </div>
        <img class="-desktop" src="/images/partners_1511x495.jpg" alt="partners banner" />
        <img class="-mobile" src="/images/partners_1000x495.jpg" alt="partners banner" />
      </div>
      <div v-if="showForm" class="-form-registration-us">
        <form @submit.prevent="handleFormSubmission" class="-registration-form">
          <div class="-programs">
            <div class="-program -form-control" v-for="(program, idx) in globalState.upcomingPrograms" :key="idx">
              <input type="radio" :id="'option' + idx" name="program" :value="program.title" :checked="idx === 0">
              <label :for="'option' + idx">{{ program.title }}</label>
            </div>
          </div>
          <input class="-name" name="name" type="text" placeholder="Name" required />
          <input class="-email" name="email" type="email" placeholder="Email address" required />
          <input class="-phoneNumber" name="phoneNumber" type="tel" placeholder="Phone number (e.g. 08012345678)" required
            pattern="[0-9]{4}[0-9]{3}[0-9]{4}" />
          <select name="joiningFrom" id="joiningFrom" class="-joiningFrom">
            <option value="" selected>Where are you joining from?</option>
            <option value="Lagos Island">Lagos Island</option>
            <option value="Lagos Mainland">Lagos Mainland</option>
            <option value="Outside Lagos">Outside Lagos</option>
            <option value="Online">Online</option>
          </select>
          <select name="needAccommodation" id="needAccommodation" class="-needAccommodation">
            <option value="" selected>Do you need accommodation?</option>
            <option value="Lagos Island">Yes</option>
            <option value="Lagos Mainland">No, I will sort myself out</option>
            <option value="Outside Lagos">Maybe</option>
          </select>
          <select name="areYouAttending" id="areYouAttending" class="-areYouAttending">
            <option value="" selected>Are you attending for the first time?</option>
            <option value="Lagos Island">Yes</option>
            <option value="Lagos Mainland">No</option>
            <option value="Outside Lagos">Not Sure</option>
          </select>
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
import { iApiOptions, iMessage, iUpcomingProgram } from '~~/src/types';
import GetInTouch from '../partials/GetInTouch.vue';

const { globalState } = useGlobals()

const showForm = computed(() => {
  const upcomingPrograms = globalState.value.upcomingPrograms ? (globalState.value?.upcomingPrograms as iUpcomingProgram[]) : []
  return upcomingPrograms.length > 0
})

const handleFormSubmission = (evt: Event) => {
  console.log("handle form submission")
  // const form = evt.target as HTMLFormElement
  // const formData = new FormData(form)
  // const entries = Object.fromEntries(formData.entries())

  // const messages: iMessage = {
  //   errorMessage: "Already requested",
  //   successMessage: "Successfully submitted"
  // }
  // const apiOptions: iApiOptions = {
  //   collection: constants.RCNLAGOSCOLLECTION,
  //   id: constants.CONTACTUSID,
  //   dataToStore: {
  //     ...entries,
  //     date: new Date().toLocaleString(),
  //   },
  //   wrapperHTML: el(constants.CONTACTUSWRAPQUERY) as HTMLElement,
  //   statusHTML: el(constants.CONTACTUSSTATUSQUERY) as HTMLElement
  // }

  // postForm(apiOptions, messages, constants.CONTACTAPI)
}


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
}

.-registration .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-programs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.-programs .-program {
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  background-color: var(--rcnlightbg);
  color: var(--rcnaccentblue);
  font-weight: bold;
  position: relative;
}
.-programs .-program label {
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.-programs .-program.active {
  background-color: var(--rcnaccentblue);
  color: white;
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

.-programs {
  grid-column-start: 1;
  grid-column-end: 3;
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


  .-programs {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-template-columns: repeat(1, 1fr);
  }

}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {

  .-registration .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-registration .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>