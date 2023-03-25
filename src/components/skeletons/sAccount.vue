<template>
  <div class="-account">
    <h5 class="-subhead"> </h5>
    <div class="-table">
      <p> </p>
      <div class="-value">
        <p class=""></p>
        <div class="-icon -btn">
          <span class="w-4 h-4"></span>
        </div>
      </div>
      <p> </p>
      <div class="-value">
        <p> </p>
        <div class="-icon -btn">
          <span class="w-4 h-4"></span>
        </div>
      </div>
      <p> </p>
      <div class="-value">
        <p> </p>
        <div class="-icon -btn">
          <span class="w-4 h-4"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iAccount } from '~~/src/types';

const props = defineProps<{
  account: iAccount
}>()

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
  width: 103px;
  height: 24px;
}

.-account .-table {
  display: grid;
  grid-template-columns: 25% 75%;
  text-transform: capitalize;
  gap: 8px;
  width: 100%;
}

.-account .-table>p {  
  text-align: right;
  width: 70%;
  height: 20px;
  align-self: center;
  justify-self: flex-end;
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


.-account .-table .-value .-icon,
.-account .-table .-value p,
.-account .-table>p,
.-account .-subhead {
  background-color: var(--rcnlightbg);
  box-shadow: unset !important;
}

.-account .-table .-value .-icon {
  width: 48px;
  height: 32px;
}

.-account .-table .-value p {
  width: 75%;
  height: 20px;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>