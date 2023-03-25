<template>
  <div class="-give">
    <div class="-inner">
      <div class="-hero-banner relative">
        <div class="-hero-title absolute">
          <h1 class="-headfont">Give</h1>
          <p>You are welcome to be a part of what the LORD is doing at RCN Lagos. Kindly find below our account details</p>
        </div>
        <img class="-desktop" src="/images/prayercells_1511x495.jpg" alt="prayercell banner" />
        <img class="-mobile" src="/images/prayercells_1000x495.jpg" alt="prayercell banner" />
      </div>
      <div class="-accounts">
        <Account v-if="isLoaded" v-for="(account, idx) in globalState.accounts" :key="idx" :account="account" />
        <sAccount v-if="!isLoaded" v-for="(account, idx) in skeletonAccounts" :key="idx" :account="account" />
      </div>
      <NuxtLink target="_blank" href="https://paystack.com/pay/RCNLagosGive" class="-paystack -btn">paystack</NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iAccount } from '~~/src/types';
import Account from '../partials/Account.vue';
import sAccount from '../skeletons/sAccount.vue';

const { globalState } = useGlobals()
const isLoaded = computed(() => (globalState.value.accounts as iAccount[]).length > 0)
 
</script>
<style scoped>
.-give {
  background-color: var(--rcnlightbg);
}

.-give>.-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-give .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
}

.-give .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-give .-hero-banner .-hero-title h1,
.-give .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-give .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-give img {
  opacity: .2;
}

.-mobile {
  display: none;
}


.-accounts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-paystack {
  background-color: var(--paystack);
  box-shadow: 0px 4px 20px -5px var(--paystack);
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-give .-hero-banner .-hero-title h1 {
    font-size: 40px
  }

  .-give .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-give .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

  .-accounts {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 576px) {

  .-give .-hero-banner .-hero-title h1 {
    font-size: 29px
  }
  .-paystack {
    width: 100%;
    text-align: center;
  }

}

@media screen and (max-width: 420px) {

  .-give .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-give .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>