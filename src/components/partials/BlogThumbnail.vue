<template>
  <div class="-thumbnail -posrel">
    <div class="-img" :data-blog="blog.title">
      <img :src="blog.thumbnail" :alt="blog.title" data-type="blog" :data-blog="blog.title" loading="lazy" />
    </div>
    <div class="-details -posrel">
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
.-thumbnail {
  background-color: white;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  height: calc((100% - 32px) / 3);
  display: grid;
  grid-template-columns: calc((100% - 48px) / 3) calc((200% - 48px) / 3);
  gap: 16px;
}

.-thumbnail .-img {
  height: 100% !important;
  cursor: pointer;
}

.-thumbnail .-img img {
  border-radius: 4px;
  display: unset !important;
  max-width: unset !important;
  height: 100% !important;
  width: 100%;
}

.-thumbnail .-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: calc(100% - 16px);
  margin-top: 8px;
}

.-thumbnail .-details .-cta {
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

.-thumbnail .-date {
  font-size: .8em;
}

.-thumbnail .-details .-title {
  margin: unset !important;
  font-weight: 600;
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.-thumbnail .-details .-subline {
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin: unset !important;
  line-height: 1.4 !important;
}

@media screen and (max-width: 1024px) {

  .-thumbnail .-details .-subline {
    -webkit-line-clamp: 2;
  }

}

@media screen and (max-width: 768px) {
  .-thumbnail {
    flex-direction: column;
    height: 100%;
    background-color: #000;
    cursor: pointer;
    display: unset;
  }

  .-thumbnail img {
    width: 100%;
    height: unset;
    opacity: .4;
  }

  .-thumbnail .-details {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin-top: unset;
    padding: unset;
  }

  .-thumbnail .-details .-txt {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  .-thumbnail .-details .-title {
    color: #fff;
    font-size: .9em;
    font-weight: 500;
    line-height: 1.2;
    margin: unset !important;
    padding: 8px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
  }

  .-thumbnail .-details .-subline {
    display: none;
  }

  .-thumbnail .-details .-cta {
    position: absolute;
    top: 8px;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    width: 100%;
  }

  .-thumbnail .-details .-cta .-readmore {
    display: none;
  }

  .-thumbnail .-date {
    background-color: rgba(0, 0, 0, 0) !important;
    padding: unset !important;
    font-size: .6em;
  }

  .-thumbnail .-details,
  .-thumbnail .-details .-txt {
    width: 100%;
  }
}

@media screen and (max-width: 576px) {

  .-thumbnail .-details .-title {
    font-size: .8em;
  }
}

@media screen and (max-width: 420px) {
  .-thumbnail .-details .-title {
    font-size: .7em;
  }
}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>