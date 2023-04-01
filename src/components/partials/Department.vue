<template>
  <div class="-department -posrel">
    <img v-loaded :src="department.image" :alt="department.name"/>
    <div class="-details">
      <h5 class="-subhead">{{ department.name }}</h5>
      <p class="-description" v-html="department.about"></p>
    <div class="-cta">
      <div class="-btn -readmore" @click="selectDepartment">read more</div>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iDepartment } from '~~/src/types';
import { vLoaded } from '~~/src/helpers/directives';

const props = defineProps<{
  department: iDepartment
}>()

const emit = defineEmits<{
  (e: 'selected', department: iDepartment): void
}>()


const selectDepartment = () => {
  emit("selected", props.department)
} 
</script>
<style scoped>
  .-department {
    border-radius: 4px;
    background-color: white;
    box-shadow: var(--box-shadow);
    overflow: hidden;
  }

  .-department .-subhead {
    margin-top: unset !important;
  }

  .-department img {
    opacity: 0;
    width: 100%;
    aspect-ratio: 560 / 315;
  }

  .-department .-details {
    padding: 8px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  .-department .-description {
    white-space: initial;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .-department .-cta {
    display: flex;
    justify-content: flex-end;
  }

  .-department .-cta .-btn {
    cursor: pointer;
  }
</style>