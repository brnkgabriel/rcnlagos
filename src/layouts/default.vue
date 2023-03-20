<template>
  <div class="font-body">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';
</script>