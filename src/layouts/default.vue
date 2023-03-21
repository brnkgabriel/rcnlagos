<template>
  <div class="font-body text-[13px] -main" data-type="main">
    <div class="-content" data-type="content">
      <Header />
      <div class="-inner">
        <slot></slot>
      </div>
      <Footer />
    </div>
    <MobileNavigation />
  </div>
</template>
<script setup lang="ts">
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';
import MobileNavigation from '../components/partials/MobileNavigation.vue';
</script>
<style scoped>
.-content {
  transform: translateX(0%);
}

.open .-content {
  transform: translateX(-10%);
}
</style>