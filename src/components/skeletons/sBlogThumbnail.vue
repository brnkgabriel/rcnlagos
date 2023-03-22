<template>
  <div class="-thumbnail -posrel">
    <div class="-img" :data-blog="blog.title">
      <img v-loaded class="opacity-0" :src="blog.thumbnail" :alt="blog.title" data-type="blog" :data-blog="blog.title">
    </div>
    <div class="-details">
      <div class="-clickable" :data-blog="blog.title" data-type="blog"></div>
      <div class="-txt">
        <h5 class="-title">{{ blog.title }}</h5>
        <p class="-subline">{{ blog.subline }}</p>
      </div>
      <div class="-cta">
        <a href="#blog" class="-btn -readmore" data-type="blog" :data-blog="blog.title">read more</a>
        <span class="-date">{{ blog.datetime }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iBlog } from '~~/src/types';
import { vLoaded } from '~~/src/helpers/directives';

defineProps<{
  blog: iBlog
}>()
</script>
<style scoped>
.-blog .-thumbnail {
  display: flex;
  height: calc((100% - 32px)/3);
  align-items: flex-start;
  column-gap: 16px;
  border-radius: 4px;
}

.-blog .-thumbnail .-img {
  height: 100% !important;
  cursor: pointer;
}

.-blog .-thumbnail .-img img {
  border-radius: 4px;
  display: unset !important;
  max-width: unset !important;
  height: 100% !important;
}

.-blog .-thumbnail .-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}

.-blog .-thumbnail .-details .-cta {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

.-thumbnail .-date {
  background-color: var(--rcnaccentblue);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: .7em;
  font-weight: 600;
  letter-spacing: .3px;
}

.-blog .-thumbnail .-date {
  font-size: .8em;
}
</style>