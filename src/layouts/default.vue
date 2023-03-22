<template>
  <div class="font-body text-[13px] -main" data-type="main">
    <div class="-content" data-type="content">
      <Header />
      <slot></slot>
      <Footer />
    </div>
    <!-- <MobileNavigation /> -->
  </div> 
</template>
<script setup lang="ts">
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';
import MobileNavigation from '../components/partials/MobileNavigation.vue';
import { iGlobal } from '../types';


const { setGlobals } = useGlobals()
const { data, refresh } = await useLazyFetch(() => constants.API)

watch(data, () => {
  const globals: iGlobal = data.value as iGlobal

  console.log("remote global data is", globals)
  setGlobals(globals)
})

onMounted(async () => await refresh())

</script>
<style scoped>
.-content {
  transform: translateX(0%);
}

.open .-content {
  transform: translateX(-10%);
}
</style>