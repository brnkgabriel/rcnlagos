<template>
  <div class="-btn -filter-fab" v-if="show">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path
        d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </svg>
  </div>
</template>
<script setup lang="ts">

const route = useRoute()

const show = ref(false)

const displayCondition = () => route.name === constants.PROGRAMS

watch(route, () => show.value = displayCondition())

onMounted(() => show.value = displayCondition())
</script>
<style scoped>
.-filter-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(1);
  /* background-color: var(--rcnaccentblue);
  box-shadow: 0px 4px 20px -5px var(--rcnaccentblue); */
}

.-filter-fab:active {
  transform: scale(.98);
}

.-filter-fab svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 768px) {

  .-filter-fab {
    bottom: 16px;
    right: 16px;
  }
}
</style>