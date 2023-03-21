<template>
  <div class="-mobile-navigation w-full h-full" data-type="mobile navigation">
    <div class="-content">
      <div class="-top">
        <div class="-close-btn relative" data-type="close mobile menu"></div>
      </div>

      <div class="-links">
        <NuxtLink data-type="mobile-link" href="/">home</NuxtLink>
        <NuxtLink data-type="mobile-link" href="/events">events</NuxtLink>
        <NuxtLink data-type="mobile-link" href="/blog">blog</NuxtLink>
        <NuxtLink data-type="mobile-link" href="/prayercells">prayer cells</NuxtLink>
        <NuxtLink data-type="mobile-link" class="-btn -give" href="/give">give</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { MobileNavigationController } from "~~/src/helpers/mobile-navigation"

onMounted(() => {
  new MobileNavigationController()
})
</script>
<style scoped>
.-mobile-navigation {
  position: fixed;
  left: 100%;
  top: 0;
  z-index: 2;
  transform: translate(0%);
  display: flex;
  justify-content: flex-end;
}
.-mobile-navigation .-content {
  background-color: var(--rcnaccentblue);
  height: 100%;
  width: 290px;
}


.open .-mobile-navigation {
  transform: translateX(-100%);
}

.-top {
  height: 72px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: flex-end;
}

.-close-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.-close-btn::before,
.-close-btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 2px;
  background-color: white;
}

.-close-btn::before {
  transform: translate(-500%, -8000%) rotate(45deg);
}

.-close-btn::after {
  transform: translate(500%, -8000%) rotate(135deg);
}

.open .-close-btn::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.open .-close-btn::after {
  transform: translate(-50%, -50%) rotate(135deg);
}

.-links {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}

.-links a {
  border-bottom: 1px solid rgba(101, 101, 101, 0.2);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
}

.-links a.router-link-active {
  color: var(--rcnaccentorange);
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>