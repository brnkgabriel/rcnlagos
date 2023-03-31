<template>
  <div class="-mobile-navigation" data-type="mobile navigation">
    <div class="-content">
      <div class="-top">
        <div class="-close-btn -posrel" data-type="close mobile menu"></div>
      </div>

      <div class="-links">
        <NuxtLink href="/">home</NuxtLink>
        <h5 class="-dropdown">
          <div class="-name">
            <span>ministry</span>
            <span class="-icon"></span>
          </div>
          <div class="-col" data-name="ministry">
            <NuxtLink href="/about">RCN Global</NuxtLink>
            <NuxtLink href="/president">RCN President</NuxtLink>
            <NuxtLink href="/lagos">RCN Lagos</NuxtLink>
            <NuxtLink href="/programs">Programs</NuxtLink>
          </div>
        </h5>
        <h5 class="-dropdown">
          <div class="-name">
            <span>community</span>
            <span class="-icon"></span>
          </div>
          <div class="-col" data-name="community">
            <NuxtLink href="/pastors">Pastors</NuxtLink>
            <NuxtLink href="/departments">Departments</NuxtLink>
            <NuxtLink href="/prayercells">Prayer Cells</NuxtLink>
            <NuxtLink href="/partner">Remnant Kingdom Stewards</NuxtLink>
            <NuxtLink href="/contact">Contact Us</NuxtLink>
          </div>
        </h5>
        <h5 class="-dropdown">
          <div class="-name">
            <span>resources</span>
            <span class="-icon"></span>
          </div>
          <div class="-col" data-name="resources">
            <NuxtLink href="/blog">Blog</NuxtLink>
            <NuxtLink href="/request">Prayer Request</NuxtLink>
            <NuxtLink href="/testimony">Give Testimony</NuxtLink>
            <NuxtLink href="/privacy">Privacy Policy</NuxtLink>
          </div>
        </h5>
        <NuxtLink class="-btn -give" href="/give">give</NuxtLink>
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
  width: 100%;
  height: 100%;
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

.-links a,
.-links h5 {
  border-bottom: 1px solid rgba(101, 101, 101, 0.2);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
}

.-links h5 {
  flex-direction: column;
  align-items: flex-start;
  height: max-content;
}

.-links h5 .-name {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
}

.-links a.router-link-active {
  color: var(--rcnaccentorange);
}

.-dropdown .-col {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-left: 16px;
}

.-dropdown:hover .-col {
  height: 100%;
}

.-dropdown .-icon {
  width: 6px;
  height: 6px;
  position: relative;
}

.-dropdown .-icon::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-top: unset;
  border-left: unset;
  transform: translate(0%, -40%) rotate(45deg);
}

.-dropdown:hover .-icon::after {
  transform: translate(0%, 40%) rotate(-135deg);
}
@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>