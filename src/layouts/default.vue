<template>
  <div class="font-body text-[13px] -main" data-type="main">
    <div class="-content" data-type="content">
      <Header />
      <slot></slot>
      <Footer />
    </div>
    <MobileNavigation />
    <FabFilter />
  </div> 
</template>
<script setup lang="ts">
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';
import MobileNavigation from '../components/partials/MobileNavigation.vue';
import FabFilter from "~~/src/components/partials/FabFilter.vue"
import { iGlobal, iProgram } from '../types';


const { globalState, setGlobals, setSearchedPrograms, setRenderedPrograms } = useGlobals()
const { data, refresh } = await useLazyFetch(() => constants.API)

watch(data, () => {
  const globals: iGlobal = data.value as iGlobal
  setGlobals(globals)
  const programs = globals.programs as iProgram[]
  setSearchedAndRenderedPrograms(programs)
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