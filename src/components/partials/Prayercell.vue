<template>
  <div class="-cell">
    <div class="-img -posrel">
      <a target="_blank" :href="whatsappIcon(cell.phoneNumber as string)" class="-clickable"></a>
      <p class="-cellname">{{ cell.name }}</p>
      <img src="/images/prayer_678x452.jpeg" alt="prayer" />
    </div>
    <div class="-details">
      <div class="-cell-row">
        <sub>coordinator</sub>
        <h5 class="-subhead -coordinator">{{ cell.coordinator }}</h5>
      </div>
      <div class="-cell-row">
        <sub>address</sub>
        <p class="-address">{{ cell.address }}</p>
      </div>
      <div class="-ctas-time">

        <div class="-ctas">
          <NuxtLink target="_blank" v-if="(cell?.location as string).length > 0" :href="cell.location" class="-btn -map">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd" />
            </svg>
          </NuxtLink>
          <NuxtLink target="_blank" :href="whatsappIcon(cell.phoneNumber as string)" class="-btn -whatsapp">
            <svg height="1792" viewBox="0 0 1792 1792" width="1792" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1113 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zm0-1382q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z" />
            </svg>
          </NuxtLink>
          <NuxtLink target="_blank" :href="phone(cell.phoneNumber as string)" class="-btn -phone">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
        <div class="-time">{{ cell.meetingTime }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iPrayercell } from '~~/src/types';
const props = defineProps<{
  cell: iPrayercell
}>()

</script>
<style scoped>
.-cell {
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  overflow: hidden;
}

.-cell sub {
  text-transform: capitalize;
}

.-cell-row .-address {

  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin: unset !important;
  line-height: 1.4 !important;
  height: 55px;
}

.-coordinator {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: unset !important;
}

.-cell .-cellname {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: white;
  z-index: 1;
  font-weight: bold;
  font-size: 1.3em;
  width: calc(100% - 16px);
}

.-cell .-img {
  aspect-ratio: 560 / 315;
  background-color: black;
}

.-cell .-img img {
  width: 100%;
  object-fit: cover;
  opacity: .5;
}

.-cell .-details {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px;
}

.-cell .-details>h5 {
  text-transform: capitalize;
  line-height: 1.2;
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.-cell .-details .-ctas-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.-cell .-details .-ctas {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
}

.-cell .-details .-ctas-time .-time {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.-cell .-details .-ctas a {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: unset !important;
  border-radius: 50%;
}

.-cell .-details .-ctas a svg {
  fill: white;
}

.-cell .-details .-ctas a.-whatsapp svg {
  width: 18px !important;
  height: 18px !important;
}

@media screen and (min-width: 420px) and (max-width: 576px) {}

@media screen and (max-width: 768px) {
  .-cell .-details>h5 {
    font-size: 14px !important;
  }
}</style>