<template>
  <blockquote class="-testimonial absolute">
    <p>{{ testimonial.quote }}</p><cite>
      <div class="-img">
        <img v-loaded class="opacity-0" :src="testimonial.image" :alt="testimonial.name" />
      </div>
      <span>{{ testimonial.name }}</span>
    </cite>
  </blockquote>
</template>
<script setup lang="ts">
import { iTestimonial } from '~~/src/types';
import { vLoaded } from '~~/src/helpers/directives';

defineProps<{
  testimonial: iTestimonial
}>()
</script>
<style scoped>
.-testimonial {
  width: 100%;
  padding: 32px !important;
  text-align: center;
  box-shadow: var(--box-shadow);
  vertical-align: top;
  background-color: white;
  border-radius: 4px;
  opacity: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
}

.-testimonial.active {
  opacity: 1;
}

.-testimonial p {
  white-space: pre-wrap;
}

.-testimonial cite {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  font-weight: 600;
}

.-testimonial cite .-img {
  width: 44px;
  border-radius: 50%;
  overflow: hidden;
}
</style>