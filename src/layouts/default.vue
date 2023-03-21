<template>
  <div class="font-body text-[13px]">
    <Header />
    <div class="-inner">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';
</script>