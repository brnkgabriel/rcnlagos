<template>
  <div class="w-full -footer bg-rcntext-500 text-white">
    <div class="-inner -links">
      <div class="-col">
        <img class="h-[40px]" src="/images/rcn-logo-white.png" alt="remnant christian network white logo" />
        <p class="m-0">Academy Guest House, Plot 6A Lateef Jakande Rd. Agidingbi 101212, Ikeja</p>
        <a href="tel:+2348186253251" class="-phone">(+234)818 625 3251</a>
        <a href="tel:+2349061767430" class="-phone">(+234) 906 176 7430</a>
        <a href="mailto:info@rcnlagos.org?subject=Ministry Inquiries" class="-email">info@rcnlagos.org</a>
      </div>
      <div class="-col">
        <h5 class="-links-category">ministry</h5>
        <NuxtLink href="/about">RCN Lagos</NuxtLink>
        <a href="https://rcnministry.org/">RCN Global</a>
        <NuxtLink href="/programs">Our Programs</NuxtLink>
        <NuxtLink href="/events/?q=past">Our Sermons</NuxtLink>
        <NuxtLink href="/events">Events</NuxtLink>
      </div>
      <div class="-col">
        <h5 class="-links-category">resources</h5>
        <NuxtLink href="/events/?q=future">Upcoming Events</NuxtLink>
        <NuxtLink href="/blog">Blog</NuxtLink>
        <NuxtLink href="/prayercells">Prayer Cells</NuxtLink>
        <NuxtLink href="/request">Prayer Request</NuxtLink>
        <NuxtLink href="/testimony">Give Testimony</NuxtLink>
      </div>
      <div class="-col">
        <h5 class="-links-category">follow us</h5>
        <div class="-social-links">

        </div>
      </div>
    </div>
    <div class="-copyright">
      <div class="-inner">
        {{ copyright }} 
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const copyright = computed(() => `© ${new Date().getFullYear()} RCN Lagos. All Rights Reserved.`)

</script>
<style scoped>
.-footer .-links {
  padding-top: 24px;
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
}

.-links-category {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2em;
}

.-copyright {
  border-top: 1px solid white;
}

.-copyright .-inner {
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

@media screen and (max-width: 1024px) {
  .-footer .-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {
  .-footer .-links {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>