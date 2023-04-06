<template>
  <div class="-mobile-navigation" data-type="mobile navigation">
    <div class="-content -posrel">
      <div class="-top -hide-back-btn">
        <div class="-back-btn -posrel">
          <span class="-clickable" data-type="back button"></span>
          <span class="-icon"></span>
          <span class="-txt">back</span>
        </div>
        <div class="-close-btn -posrel" data-type="close mobile menu"></div>
      </div>

      <div class="-links -posabs active" data-name="home">
        <NuxtLink href="/" data-type="mobile menu">home</NuxtLink>
        <div class="-dropdown -posrel">
          <span class="-clickable" data-type="withsubmenu" data-name="ministry"></span>
          <span>ministry</span>
          <span class="-icon"></span>
        </div>
        <NuxtLink href="/programs" data-type="mobile menu">Programs</NuxtLink>
        <NuxtLink href="/blog" data-type="mobile menu">Blog</NuxtLink>
        <div class="-dropdown -posrel">
          <span class="-clickable" data-type="withsubmenu" data-name="community"></span>
          <span>community</span>
          <span class="-icon"></span>
        </div>
        <div class="-dropdown -posrel">
          <span class="-clickable" data-type="withsubmenu" data-name="resources"></span>
          <span>resources</span>
          <span class="-icon"></span>
        </div>
        <NuxtLink class="-btn -streamlive" href="https://www.youtube.com/@RCNLagos/streams" target="_blank">stream live</NuxtLink>
        <NuxtLink class="-btn -mixlr" href="https://rcnlagos.mixlr.com/" target="_blank" >mixlr</NuxtLink>
        <NuxtLink class="-btn -give" href="/give" data-type="mobile menu">give</NuxtLink>
      </div>
      <div class="-links -posabs" data-name="ministry">
        <h5 class="-name">ministry</h5>
        <NuxtLink href="/about" data-type="mobile menu">RCN Global</NuxtLink>
        <NuxtLink href="/lagos" data-type="mobile menu">RCN Lagos</NuxtLink>
        <NuxtLink href="https://www.adullam.ng/" target="_blank">Adullam</NuxtLink>
      </div>
      <div class="-links -posabs" data-name="community">
        <h5 class="-name">community</h5>
        <NuxtLink href="/president" data-type="mobile menu">RCN President</NuxtLink>
        <NuxtLink href="/pastors" data-type="mobile menu">Pastors</NuxtLink>
        <NuxtLink href="/departments" data-type="mobile menu">Departments</NuxtLink>
        <NuxtLink href="/prayercells" data-type="mobile menu">Prayer Cells</NuxtLink>
        <NuxtLink href="/partner" data-type="mobile menu">Kingdom Stewards</NuxtLink>
      </div>
      <div class="-links -posabs" data-name="resources">
        <h5 class="-name">resources</h5>
        <NuxtLink href="/contact" data-type="mobile menu">Contact Us</NuxtLink>
        <NuxtLink href="/request" data-type="mobile menu">Prayer Request</NuxtLink>
        <NuxtLink href="/testimony" data-type="mobile menu">Give Testimony</NuxtLink>
        <NuxtLink href="/registration" data-type="mobile menu">Register for Program</NuxtLink>
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
  justify-content: space-between;
}

.-top.-hide-back-btn {
  justify-content: flex-end;
}

.-top.-hide-back-btn .-back-btn {
  display: none;
}

.-close-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
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

.-back-btn {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
  column-gap: 8px;
  padding: 8px 0;
  cursor: pointer;
  padding-right: 8px;
}

.-back-btn .-icon {
  position: relative;
  width: 12px;
  height: 12px;
}

.-back-btn .-txt {
  color: white;
  text-transform: uppercase;
  font-weight: 600;
}

.-back-btn .-icon::before,
.-back-btn .-icon::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-bottom: unset;
  border-right: unset;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

.-back-btn .-icon::after {
  border: unset;
  width: 16px;
  height: 2px;
  background-color: white;
  transform: translate(-40%, -50%) rotate(0deg);
}

.-links {
  display: grid;
  width: calc(100% - 32px);
  left: 50%;
  transform: translateX(200%);
  gap: 8px;
  height: calc(100vh - 88px);
  overflow: auto;
  padding-bottom: 16px;
}

.-links > * {
  height: 48px;
}

.-links.active {
  transform: translateX(-50%);
}

.-links a,
.-dropdown span,
.-links .-name {
  border-bottom: 1px solid rgba(101, 101, 101, 0.2);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
}

.-links .-name {
  color: rgba(255, 255, 255, .2);
}

.-links a.router-link-active {
  color: var(--rcnaccentorange);
}

.-dropdown {
  display: flex;
  column-gap: 4px;
  align-items: center;
}

.-dropdown .-col {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-left: 16px;
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
  transform: translate(0%, 0%) rotate(-45deg);
}

.-streamlive {
  background-color: var(--red);
  box-shadow: 0px 4px 20px -5px var(--red);
}

.-mixlr {
  background-color: white !important;
  box-shadow: 0px 4px 20px -5px white !important;
  color: var(--red) !important;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>