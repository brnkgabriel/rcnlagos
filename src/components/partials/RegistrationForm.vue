<template>
  <form @submit.prevent="handleFormSubmission" class="-registration-form">
    <div class="-programs">
      <div class="-program -form-control" v-for="(program, idx) in globalState.upcomingPrograms" :key="idx"
        :data-name="program.title" :class="idx === 0 ? 'active' : ''">
        <input type="radio" :id="'option' + idx" name="program" :value="program.title" :checked="idx === 0">
        <label :for="'option' + idx" @click="changeProgram(program)">{{ program.title }}</label>
      </div>
    </div>
    <input class="-name" name="name" type="text" placeholder="Name" required />
    <input class="-email" name="email" type="email" placeholder="Email address" required />
    <PhoneNumberInput class="-phoneNumber" @entered="handlePhoneNumber" />
    <select name="joiningFrom" id="joiningFrom" class="-joiningFrom" required>
      <option value="" selected>Where are you joining from?</option>
      <option value="Lagos Island">Lagos Island</option>
      <option value="Lagos Mainland">Lagos Mainland</option>
      <option value="Outside Lagos">Outside Lagos</option>
      <option value="Online">Online</option>
    </select>
    <select name="needAccommodation" id="needAccommodation" class="-needAccommodation" required>
      <option value="" selected>Do you need accommodation?</option>
      <option value="Yes">Yes</option>
      <option value="No, I will sort myself out">No, I will sort myself out</option>
      <option value="Maybe">Maybe</option>
    </select>
    <select name="firstTimer" id="firstTimer" class="-firstTimer" required>
      <option value="" selected>Are you attending for the first time?</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
      <option value="Not Sure">Not Sure</option>
    </select>
    <button type="submit" class="-btn -posrel">
      <span class="-clickable -posabs" data-type="submit"></span>
      <span class="-spin-loader"></span>
      <span class="-txt">submit</span>
    </button>
    <p class="-status" data-type="error"></p>
  </form>
</template>
<script setup lang="ts">

import { iApiOptions, iMessage, iUpcomingProgram } from '~~/src/types'; 
import PhoneNumberInput from './PhoneNumberInput.vue';

const { globalState } = useGlobals() 

const pNumber = ref("")
const handlePhoneNumber = (number: string) => pNumber.value = number

const changeProgram = (program: iUpcomingProgram) => {
  const selectedProgram = el(`.-program[data-name="${program.title}"]`)
  const allPrograms = all('.-program')
  allPrograms.forEach(program => program.classList.remove(constants.ACTIVE))
  selectedProgram?.classList.add(constants.ACTIVE)
}

const handleFormSubmission = (evt: Event) => {
  const form = evt.target as HTMLFormElement
  const formData = new FormData(form)
  const entries = Object.fromEntries(formData.entries())
  entries.phoneNumber = pNumber.value

  const messages: iMessage = {
    errorMessage: "Already registered",
    successMessage: "Successfully submitted"
  }
  const apiOptions: iApiOptions = {
    collection: constants.RCNLAGOSCOLLECTION,
    id: constants.REGISTRATIONID,
    dataToStore: {
      ...entries,
      date: new Date().toLocaleString(),
    },
    wrapperHTML: el(constants.REGISTRATIONWRAPQUERY) as HTMLElement,
    statusHTML: el(constants.REGISTRATIONSTATUSQUERY) as HTMLElement
  }

  postForm(apiOptions, messages, constants.REGISTRATIONAPI)
}


</script>
<style scoped>

.-registration-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-programs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.-programs .-program {
  padding: 8px 16px;
  border-radius: 4px;
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

.-programs {
  grid-column-start: 1;
  grid-column-end: 3;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) { 

  .-registration-form {
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

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>