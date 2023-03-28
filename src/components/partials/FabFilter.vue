<template>
  <div class="-filter-fab" v-if="show" v-fab-filter>
    <div class="-filter">
      <div class="-search-close -space-ends">
        <div class="-search-form relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-6 h-6 absolute -search-icon">
            <path fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd" />
          </svg>
          <input type="text" placeholder="Search programs" v-model="searchTerm" />
        </div>
        <div class="-close -subhead" data-type="fab">Close</div>
      </div>
      <hr />
    </div>
    <div class="-fab -btn relative">
      <span class="-clickable" data-type="fab"></span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path
          d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { vFabFilter } from '~~/src/helpers/directives';
import { iProgram } from '~~/src/types';

const show = ref(false)
const searchTerm = ref("")
const route = useRoute()
const { globalState } = useGlobals()

const searchResult = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return globalState.value.programs?.filter((program: iProgram) => {
    const themeIdx = program.theme?.toLowerCase().indexOf(term)
    const typeIdx = program.type?.toLowerCase().indexOf(term)
    const ministerIdx = program.minister?.toLowerCase().indexOf(term)
    const datetimeIdx = program.datetime?.toLowerCase().indexOf(term)

    console.log("themeIdx =", themeIdx, "typeIdx =", typeIdx, "ministerIdx =", ministerIdx, "datetimeIdx =", datetimeIdx)
  })
})

watch(searchResult, () => console.log("search results", searchResult.value))

const displayCondition = () => route.name === constants.PROGRAMS

watch(route, () => show.value = displayCondition())

onMounted(() => show.value = displayCondition())
</script>
<style scoped>
.-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(0%, 0%) scale(1);
  /* background-color: var(--rcnaccentblue);
  box-shadow: 0px 4px 20px -5px var(--rcnaccentblue); */
}

.-fab:active {
  transform: scale(.98);
}

.show .-fab {
  transform: translate(0%, 200%) scale(1);
}

.-filter {
  position: fixed;
  bottom: 0;
  right: 32px;
  width: 300px;
  background-color: white;
  height: 200px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transform: translate(0%, 100%);
  box-shadow: var(--box-shadow);
  /* padding: 8px 16px; */
}

.-space-ends {
  width: calc(100% - 32px);
  margin: 0 auto;
}

.show .-filter {
  transform: translate(0%, 0%);
}

.-filter-fab svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.-search-close { 
  display: grid !important;
  grid-template-columns: calc(100% - 57px) 57px;
  justify-content: space-between;
  align-items: center;
  margin: 16px auto;
}

.-search-form {}

.-search-form svg {
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
}

.-search-close input {
  padding-left: 40px;
}

.-search-close .-close {
  cursor: pointer;
  height: 40px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {

  .-filter-fab {
    bottom: 16px;
    right: 16px;
  }
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {
  .-filter {
    width: 100%;
    right: 0;
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>