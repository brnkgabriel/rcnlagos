<template>
  <div class="-cell">
    <div class="-img relative">
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
      <div class="-ctas">
        <NuxtLink target="_blank" v-if="(cell?.location as string).length > 0" :href="cell.location" class="-btn -map">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd" />
          </svg>
        </NuxtLink>
        <NuxtLink target="_blank" :href="whatsappIcon(cell.phoneNumber as string)" class="-btn -whatsapp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd"
              d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
              clip-rule="evenodd" />
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

.-cell .-details .-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
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

@media screen and (min-width: 420px) and (max-width: 576px) {}

@media screen and (max-width: 768px) {
  .-cell .-details>h5 {
    font-size: 14px !important;
  }
}
</style>