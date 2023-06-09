<template>
  <div class="-filter-fab" v-if="show" v-fab-filter>
    <div class="-filter">
      <div class="-search-close -space-ends">
        <div class="-search-form -posrel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-6 h-6 -posabs -search-icon">
            <path fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd" />
          </svg>
          <input type="text" placeholder="Search programs" v-model="searchTerm" />
        </div>
        <div class="-close -subhead" data-type="fab">Close</div>
      </div>
      <hr />
      <div class="-categories">
        <div class="-category" v-for="(category, idx) in (globalState?.programCategories as iProgramCategory[])" :key="idx"
          :data-name="category.name" @click="selectCategory(category)" :data-type="constants.PROGRAMCATEGORYTYPE">{{ category.name }}</div>
      </div>
    </div>
    <div class="-fab -btn -posrel">
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
import { iGlobal, iProgram, iProgramCategory } from '~~/src/types';
import { useGtag } from "vue-gtag-next"

const { event } = useGtag()

const show = ref(false)
const searchTerm = ref("")
const route = useRoute()
const { globalState } = useGlobals() 
const displayCondition = () => route.name === constants.PROGRAMS || route.name === constants.OURPROGRAMMES || route.name === constants.SERMONS2 || route.name === constants.SERMONS

const searchResult = computed(() => useSearch(globalState.value, searchTerm.value, displayCondition)) 

watch(searchResult, () => setSearchedAndRenderedPrograms(searchResult.value as iProgram[]))

const selectCategory = (category: iProgramCategory) => {
  event('programspage_fabfilter', {
    'category': category.name,
    'time': category.time,
    'value': 1
  })
  const categories = all(`.-category[data-type="${constants.PROGRAMCATEGORYTYPE}"]`)
  const selection = el(`.-category[data-name="${category.name}"]`)
  categories.forEach(category => category.classList.remove(constants.ACTIVE))
  selection?.classList.add(constants.ACTIVE)
  searchTerm.value = category.name as string
}

watch(route, () => {
  console.log("route name is", route.name)
  show.value = displayCondition()
})

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
  margin: 8px auto;
}

.-search-form {}

.-search-form svg {
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
}

.-search-close input {
  padding-left: 40px;
  width: 100%;
}

.-search-close .-close {
  cursor: pointer;
  height: 40px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.-categories {
  padding: 16px;
  height: 108px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.-categories .-category {
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--rcnlightbg);
  cursor: pointer;
}

.-categories .-category.active {
  background-color: var(--rcnaccentblue);
  color: white;
}

@media screen and (max-width: 1024px) {

  .-filter,
  .-fab {
    right: 16px;
  }
}

@media screen and (max-width: 768px) {
  .navlinks {
    display: none;
  }
}

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