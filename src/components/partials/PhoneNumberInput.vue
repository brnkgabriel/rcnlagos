<template>
  <input ref="phoneInputRef" name="phoneNumber" type="tel" placeholder="(832)-310-8276" required
    v-model="phoneNumberRef" />
</template>
<script setup lang="ts">

import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.min.css';
import { iPhone } from '~~/src/types';

const phoneInputRef = ref<HTMLInputElement>();
const phoneNumberRef = ref("")
const countryCode = ref("+234")
const iPhoneRef = ref<iPhone>({
  countryCode: countryCode.value,
  countryName: "Nigeria",
  phoneNumber: phoneNumberRef.value
})

const emit = defineEmits<{
  (e: 'entered', number: iPhone): void
}>()

watch(phoneNumberRef, () => {
  iPhoneRef.value = {
    countryCode: countryCode.value,
    countryName: "Nigeria",
    phoneNumber: phoneNumberRef.value
  }
  console.log("something is changing", iPhoneRef.value)
  emit("entered", iPhoneRef.value)
});

onMounted(() => {
  // https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js

  const phoneInput = intlTelInput(phoneInputRef.value as Element, {
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js',
    preferredCountries: ['ng'],
    separateDialCode: true, // Show separate dial code
  });

  // phoneInput.setNumber(phoneNumberRef.value); // Set initial value

  // Watch for changes to selected country
  (phoneInputRef.value as HTMLInputElement).addEventListener('countrychange', () => {
    countryCode.value = `+${phoneInput.getSelectedCountryData().dialCode}`
    console.log(phoneNumberRef.value)
    iPhoneRef.value = {
      countryName: phoneInput.getSelectedCountryData().name,
      countryCode: phoneInput.getSelectedCountryData().dialCode,
      phoneNumber: phoneNumberRef.value
    }
    emit("entered", iPhoneRef.value)
  });
})

</script> 

<style scoped>
/* .iti {
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
}

.itiinput {
  width: 100%;
}

@media screen and (max-width: 768px) {

  .iti {
    grid-column-start: 1;
    grid-column-end: 2;
  }
} */
</style>