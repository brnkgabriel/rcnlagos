<template>
  <div :class="className">
    <h5 class="-subhead">{{ currency }}</h5>
    <div class="-table">
      <p>Bank Name:</p>
      <div class="-value" v-copy-to-clipboard>
        <p>{{ account.bank }}</p>
        <div class="-icon -btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-4 h-4">
            <path
              d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
            <path
              d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
        </div>
      </div>
      <p>Account Name:</p>
      <div class="-value" v-copy-to-clipboard>
        <p>{{ account.accountName }}</p>
        <div class="-icon -btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-4 h-4">
            <path
              d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
            <path
              d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
        </div>
      </div>
      <p>Account Number:</p>
      <div class="-value" v-copy-to-clipboard>
        <p>{{ account.accountNumber }}</p>
        <div class="-icon -btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-4 h-4">
            <path
              d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
            <path
              d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iAccount } from '~~/src/types';
import { vCopyToClipboard } from "~/helpers/directives"

const props = defineProps<{
  account: iAccount
}>()

const currency = computed(() => `${props.account.currencyName} (${props.account.currencySymbol})`)
const className = computed(() => `-account -${props.account.currencyName?.toLowerCase()}`)

</script>

<style scoped>



.-account {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  background-color: white;
}

.-account.-naira .-subhead {
  color: var(--green) !important;
}

.-account.-dollars .-subhead {
  color: var(--rcnaccentblue) !important;
}

.-account.-pounds .-subhead {
  color: var(--rcnaccentorange) !important;
}

.-account.-euro .-subhead {
  color: var(--red) !important;
}

.-account .-subhead {
  text-transform: uppercase;
}

.-account .-table {
  display: grid;
  grid-template-columns: 25% 75%;
  text-transform: capitalize;
  gap: 8px;
  width: 100%;
}

.-account .-table>p {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
}

.-account .-table .-value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
}

.-account .-table>* {
  padding: 8px;
}

.-account .-table .-value>p {}


.-account.-naira .-table .-value .-icon {
  background-color: var(--green);
  box-shadow: 0px 4px 20px -5px var(--green);
}

.-account.-dollars .-table .-value .-icon {
  background-color: var(--rcnaccentblue);
  box-shadow: 0px 4px 20px -5px var(--rcnaccentblue);
}

.-account.-pounds .-table .-value .-icon {
  background-color: var(--rcnaccentorange);
  box-shadow: 0px 4px 20px -5px var(--rcnaccentorange);
}

.-account.-euro .-table .-value .-icon {
  background-color: var(--red);
  box-shadow: 0px 4px 20px -5px var(--red);
}

.-account .-table .-value .-icon {
  cursor: pointer;
}
@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>