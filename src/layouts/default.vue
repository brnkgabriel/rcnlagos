<template>
  <div class="font-body -main" data-type="main">
    <div class="-content" data-type="content">
      <GDPRTopBar />
      <Header />
      <slot></slot>
      <Footer />
    </div>
    <MobileNavigation />
    <FabFilter v-if="showFilterFab" />
  </div> 
</template>
<script setup lang="ts">
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';
import MobileNavigation from '../components/partials/MobileNavigation.vue';
import FabFilter from "~~/src/components/partials/FabFilter.vue"
import GDPRTopBar from '../components/partials/GDPRTopBar.vue';
import { iGlobal, iProgram } from '../types';


const { setGlobals } = useGlobals()
const { data, refresh } = await useLazyFetch(() => constants.API)

const showFilterFab = ref(false)

const route = useRoute()

watchEffect(() => showFilterFab.value = route.name === constants.PROGRAMS ? true : false)


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