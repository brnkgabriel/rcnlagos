<template>
  <div class="-cell">
    <div class="-img relative">
      <a target="_blank" :href="cell.location" class="-clickable"></a>
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
        <NuxtLink target="_blank" :href="whatsappIcon(cell.phoneNumber as string)" class="-whatsapp">
          <svg width="100%" height="100%" viewBox="0 0 800 800" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g transform="matrix(0.815,0,0,0.815,74,74)">
              <path
                d="M-0,800L68.8,593.614C33.89,534.897 13.793,466.372 13.793,393.103C13.793,176 189.793,-0 406.897,-0C624,-0 800,176 800,393.103C800,610.207 624,786.207 406.897,786.207C340.841,786.207 278.634,769.834 224,741.062L-0,800Z"
                style="fill:rgb(44,183,66);fill-rule:nonzero;" />
              <path
                d="M-58.201,780.598C-65.325,801.969 -60.164,825.526 -44.757,841.96C-29.35,858.394 -6.175,865.062 15.611,859.33L217.48,806.215C275.138,832.709 339.272,847.557 406.897,847.557C657.882,847.557 861.35,644.089 861.35,393.103C861.35,142.118 657.882,-61.35 406.897,-61.35C155.911,-61.35 -47.557,142.118 -47.557,393.103C-47.557,467.524 -29.616,537.708 2.105,599.694C-16.297,654.895 -58.201,780.598 -58.201,780.598ZM-0,800L68.8,593.614C33.89,534.897 13.793,466.372 13.793,393.103C13.793,176 189.793,-0 406.897,-0C624,-0 800,176 800,393.103C800,610.207 624,786.207 406.897,786.207C340.841,786.207 278.634,769.834 224,741.062L-0,800Z"
                style="fill:white;" />
              <path
                d="M657.697,523.931C639.545,489.628 572.607,450.4 572.607,450.4C557.462,441.766 539.186,440.8 530.552,456.193C530.552,456.193 508.8,482.276 503.269,486.028C478,503.145 454.593,502.483 430.966,478.855L321.145,369.034C297.517,345.407 296.855,322 313.972,296.731C317.724,291.2 343.807,269.448 343.807,269.448C359.2,260.8 358.234,242.538 349.6,227.393C349.6,227.393 310.372,160.455 276.069,142.303C261.476,134.579 243.559,137.283 231.89,148.952L207.641,173.2C130.717,250.124 168.593,336.966 245.517,413.89L386.124,554.497C463.048,631.421 549.89,669.297 626.814,592.372L651.062,568.124C662.731,556.428 665.421,538.51 657.697,523.931Z"
                style="fill:white;fill-rule:nonzero;" />
            </g>
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
  width: 100%;
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
  justify-content: space-between;
}


.-cell .-details .-ctas a.-phone,
.-cell .-details .-ctas a.-map {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: unset !important;
  border-radius: 50%;
}

.-cell .-details .-ctas a.-phone {
  background-color: var(--rcnaccentblue);
  box-shadow: 0px 4px 20px -5px var(--rcnaccentblue);
}

.-cell .-details .-ctas a.-whatsapp {
  width: 48px;
}

@media screen and (min-width: 420px) and (max-width: 576px) {}

@media screen and (max-width: 768px) {
  .-cell .-details>h5 {
    font-size: 14px !important;
  }
}
</style>