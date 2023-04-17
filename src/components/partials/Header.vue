<template>
  <div class="-header shadow-custom">
    <div class="-inner -posrel">
      <NuxtLink href="/" class="-logo">
        <img src="https://ik.imagekit.io/hbofcejtvx/rcnlagos/others/rcn-logo.png?updatedAt=1680969623539" alt="remnant christian network logo" />
      </NuxtLink> 
      <Search />
      <div class="-links">
        <NuxtLink href="/">home</NuxtLink>
        <h5 class="-dropdown -posrel">
          <span>ministry</span>
          <span class="-icon"></span>
          <div class="-col -posabs" data-name="ministry">
            <NuxtLink href="/about">RCN Global</NuxtLink>
            <NuxtLink href="/lagos">RCN Lagos</NuxtLink>
            <NuxtLink href="https://www.adullam.ng/">Adullam</NuxtLink>
          </div>
        </h5>
        <NuxtLink href="/programs">Programs</NuxtLink>
        <NuxtLink href="/blog">Blog</NuxtLink>
        <h5 class="-dropdown -posrel">
          <span>community</span>
          <span class="-icon"></span>
          <div class="-col -posabs" data-name="community">
            <NuxtLink href="/president">RCN President</NuxtLink>
            <NuxtLink href="/pastors">Pastors</NuxtLink>
            <NuxtLink href="/departments">Departments</NuxtLink>
            <NuxtLink href="/prayercells">Prayer Cells</NuxtLink>
            <NuxtLink href="/partner">Kingdom Stewards</NuxtLink>
          </div>
        </h5>
        <h5 class="-dropdown -posrel">
          <span>resources</span>
          <span class="-icon"></span>
          <div class="-col -posabs" data-name="resources">
            <NuxtLink href="/contact">Contact Us</NuxtLink>
            <NuxtLink href="/request">Prayer Request</NuxtLink>
            <NuxtLink href="/testimony">Give Testimony</NuxtLink>
            <NuxtLink href="/registration">Register for Program</NuxtLink>
          </div>
        </h5>
        <NuxtLink class="-btn -give" href="/give">give</NuxtLink>
      </div>
      <div class="-hamburger -posrel">
        <div class="-clickable" data-type="hamburger"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Search from './Search.vue';

</script>
<style scoped>
.-header {
  position: sticky;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: white;
}

.-header .-inner {
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
}

.-logo img {
  height: 40px;
  width: 73.3px !important;
}

.-header .-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.-header .-hamburger {
  display: none;
}

.-header .-hamburger svg {
  width: 24px;
  height: 24px;
}

.-header .-links a,
.-dropdown {
  text-transform: uppercase;
  font-weight: 600;
  color: var(--rcntext);
  padding: 8px 16px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.-header .-links .-give {
  padding: 4px 16px;
  height: unset;
}

.-header .-links a.router-link-active {
  color: var(--rcnaccentorange);
}


.-dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 8px;
}

.-col {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  top: 100%;
  left: 0%;
  background-color: white;
  width: -moz-max-content;
  width: max-content;
  border-top: 2px solid var(--rcntext);
  border-radius: 4px;
  transform: translateY(200%); 
  transition: all .2s cubic-bezier(.165,.84,.44,1);
}

.-dropdown:hover .-col {
  display: flex;
  transform: translateY(0%); 
}
 

.-col a {
  width: 100%;
  justify-content: flex-start !important;
}

.-col a:hover {
  background-color: var(--rcnlightbg);
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
  border: 1px solid var(--rcntext);
  border-top: unset;
  border-left: unset;
  transform: translate(0%, -40%) rotate(45deg);
}

.-dropdown:hover .-icon::after {
  transform: translate(0%, 40%) rotate(-135deg);
}

@media screen and (max-width: 1024px) {
  .-header .-links {
    display: none;
  }

  .-header .-hamburger {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>