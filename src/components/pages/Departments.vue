<template>
  <div class="-departments">
    <DepartmentModal ref="departmentModal" :department="selectedDepartment" />
    <div class="-cells-wrap -inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Departments</h1>
          <p>Explore our diverse ministries, including choir, children's programs, logistics, media and publicity etc. Find your place to serve, grow, and connect with God and others.</p>
        </div>
        <img class="-desktop" src="/images/1511x495.jpg" alt="desktop banner" />
        <img class="-mobile" src="/images/1000x495.jpg" alt="mobile banner" />
      </div>
      <div class="-cells">
        <Department v-if="isLoaded" v-for="(department, idx) in globalState.departments" :key="idx" :department="department" @selected="showDepartment" />
        <sDepartment v-if="!isLoaded" v-for="(_, idx) in skeletonDepartments" :key="idx" />
      </div>
    </div> 
  </div>
</template>
<script setup lang="ts">
import { iDepartment } from '~~/src/types';
import Department from "~/components/partials/Department.vue"
import sDepartment from "~/components/skeletons/sDepartment.vue"
import DepartmentModal from "~/components/partials/DepartmentModal.vue"

const { globalState } = useGlobals()

const departmentModal = ref()

const selectedDepartment = ref<iDepartment>(skeletonDepartments[0])

const isLoaded = computed(() => (globalState.value.departments as iDepartment[]).length > 0)

const showDepartment = (program: iDepartment) => {
  departmentModal.value.isOpen = true
  selectedDepartment.value = program
}
</script>
<style scoped>
.-departments {
  background-color: var(--rcnlightbg);
}

.-cells-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-departments .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
}

.-departments .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-departments .-hero-banner .-hero-title h1,
.-departments .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-departments .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-departments img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-cells {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0 auto;
}

.-cells .-cell {
  background-color: white;
  text-align: center;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-cells {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .-departments .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-departments .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-departments .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

}

@media screen and (max-width: 576px) {

  .-cells {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  } 

}

@media screen and (max-width: 420px) {

  .-cells {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  .-departments .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-departments .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }
}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>