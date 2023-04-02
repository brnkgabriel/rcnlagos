<template>
  <div class="-search-form -posrel" v-if="show">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 -posabs -search-icon">
      <path fill-rule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
        clip-rule="evenodd" />
    </svg>
    <input type="text" placeholder="Search programs" v-model="searchTerm" />
  </div>
</template>
<script setup lang="ts">
import { iProgram } from '~~/src/types';


const show = ref(false)
const searchTerm = ref("")
const route = useRoute()
const { globalState } = useGlobals()

const searchResult = computed(() => {
  const term = searchTerm.value.toLowerCase()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  if (searchTerm.value === "") {
    return globalState.value.programs
  }
  return globalState.value.programs?.filter((program: iProgram) => programFilterCondition(program, term))
})

const programFilterCondition = (program: iProgram, term: string) => {
  const themeIdx = program.title?.toLowerCase().indexOf(term)
  const typeIdx = program.type?.toLowerCase().indexOf(term)
  const ministerIdx = program.minister?.toLowerCase().indexOf(term)
  const datetimeIdx = program.datetime?.toLowerCase().indexOf(term)

  const insideTheme = themeIdx !== -1
  const insideType = typeIdx !== -1
  const insideMinister = ministerIdx !== -1
  const insideDateTime = datetimeIdx !== -1

  return insideTheme || insideType || insideMinister || insideDateTime
}

watch(searchResult, () => setSearchedAndRenderedPrograms(searchResult.value as iProgram[]))
const displayCondition = () => route.name === constants.PROGRAMS

watch(route, () => show.value = displayCondition())

onMounted(() => show.value = displayCondition())
</script>
<style scoped>
.-search-form {
  width: 35%;
}

.-search-form svg {
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
}

input {
  padding-left: 40px;
  width: 100%;
}

@media screen and (min-width: 1025px) and (max-width: 1280px) {
  .-search-form {
    width: 22.5%;
  }
}

@media screen and (max-width: 1024px) {
  .-search-form {
    width: 80%;
  }
}

@media screen and (max-width: 768px) {
  
  .-search-form {
    width: 70%;
  }
}

@media screen and (max-width: 576px) {
  .-search-form {
    width: 60%;
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) { 
  .-search-form {
    width: 46.875%;
  }
}
</style>