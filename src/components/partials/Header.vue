<template>
  <div class="-header shadow-custom">
    <div class="-inner">
      <NuxtLink href="/" class="-logo">
        <img class="h-[40px]" src="/images/rcn-logo.png" alt="remnant christian network logo" />
      </NuxtLink>
      <div class="-links">
        <NuxtLink href="/">home</NuxtLink>
        <NuxtLink href="/events">events</NuxtLink>
        <NuxtLink href="/blog">blog</NuxtLink>
        <NuxtLink href="/prayercells">prayer cells</NuxtLink>
        <NuxtLink class="-btn -give" href="/give">give</NuxtLink>
      </div>
      <div class="-hamburger relative">
        <div class="-clickable" data-type="hamburger"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>

.-header {
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: white;
}
.-header .-inner {
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.-header .-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
.-header .-hamburger {
  display: none;
}

.-header .-links a {
  text-transform: uppercase;
  font-weight: 600;
  color: var(--rcntext);
}
.-header .-links .-give {
  padding: 4px 16px;
}

.-header .-links a.router-link-active {
  color: var(--rcnaccentorange);
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