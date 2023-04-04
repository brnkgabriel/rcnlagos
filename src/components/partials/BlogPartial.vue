<template>
  <div class="-content">
    <div class="-content-item -selected -posrel" :data-state="dataState">
      <div class="-post -posabs">
        <div class="-directionalbutton -main" data-type="button" :data-state="singleBtnState" @click="toggleState"></div>
        <div class="-directionalbuttons -mid -posabs">
          <div class="-directionalbutton -up" data-type="mid button" @click="setState(constants.UP)"></div>
          <div class="-directionalbutton -down" data-type="mid button" @click="setState(constants.DOWN)"></div>
        </div>
        <div class="-postcontent" v-html="selected?.htmlContent"></div>
      </div>
      <div class="-imgwrap">
        <img class="opacity-0" v-loaded :src="selected?.banner" :alt="selected?.title">
      </div>
    </div>
    <div class="-content-item -thumbnails">
      <BlogThumbnail v-for="(blog, idx) in blogs" :key="idx" :blog="blog" @click="updateBlog(blog)" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { iBlog } from '~~/src/types';
import BlogThumbnail from './BlogThumbnail.vue';
import { vLoaded } from '~~/src/helpers/directives';

const props = defineProps<{
  blogs: iBlog[]
}>()

const selected = ref<iBlog>(props.blogs[0])
const dataState = ref(constants.DOWN)
const singleBtnState = ref(constants.DOWN)

const updateBlog = (blog: iBlog) => {
  dataState.value = constants.MID
  selected.value = blog
}
const toggleState = () => {
  dataState.value = singleBtnState.value === constants.UP ? constants.DOWN : constants.UP
  switch (singleBtnState.value) {
    case constants.UP:
      dataState.value = constants.DOWN
      singleBtnState.value = constants.DOWN
      break;
    case constants.DOWN:
      dataState.value = constants.UP
      singleBtnState.value = constants.UP
      break
    default:
      break;
  }
}

const setState = (state: string) => {
  dataState.value = state
  singleBtnState.value = state
}

</script>
<style scoped>
.-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.-content .-content-item {
  width: calc((100% - 16px)/2);
  aspect-ratio: 500/500;
  overflow: hidden;
}

.-content .-content-item.-thumbnails {

  overflow-x: hidden;
  overflow-y: auto;
}


.-post .-mid,
[data-state="up"] .-post .-mid,
[data-state="down"] .-post .-mid {
  display: flex;
  align-items: center;
  left: 50%;
  transform: translate(-1150%, -50%);
  column-gap: 16px;
}

/* ========================= start down ======================== */
.-selected .-post {
  background-color: rgba(0, 0, 0, .8);
  width: 100%;
  top: 0;
  height: 100%;
  transform: translateY(calc(100% - 40px));
  border-radius: 4px;
}

.-post .-main {
  transform: translate(-50%, -50%);
}


.-selected .-post .-mid .-directionalbutton {
  position: relative;
  transform: unset;
  left: unset;
}

.-selected .-post .-mid .-directionalbutton.-down::before {
  transform: translate(-50%, -55%) rotate(-135deg);
}

.-selected .-post .-postcontent {
  padding: 8px;
  padding-top: 48px;
  height: 100%;
  overflow: auto;
  color: #fff;
  font-weight: 300;
  font-size: .9em;
  opacity: 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

/* ========================= start down ======================== */



/* ========================= start mid ======================== */
[data-state="mid"] .-post .-mid {
  transform: translate(-50%, -50%);
}

[data-state="mid"] .-post .-main {
  transform: translate(-50%, 1150%);
}

[data-state="mid"] .-post {
  transform: translateY(50%);
}

[data-state="mid"] .-post .-postcontent {
  opacity: 1 !important;
}

/* ========================= start mid ======================== */

/* ========================= start up ======================== */


[data-state="up"] .-post .-main {
  transform: translate(-50%, 8px);
}

[data-state="up"] .-post .-main::before {
  transform: translate(-50%, -55%) rotate(-135deg);
}

[data-state="up"] .-post {
  transform: translateY(0);
}

[data-state="up"] .-post .-postcontent {
  opacity: 1 !important;
}

/* ========================= start up ======================== */



.-selected img {
  width: 100%;
  border-radius: 4px;
}

.-thumbnails {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  row-gap: 16px;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {
  /* .-thumbnails {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    grid-template-rows: calc((100% - 16px)/2) calc((100% - 16px)/2);
  } */

  .-thumbnails {
    display: block;
  }

  .-thumbnails .-thumbnail {
    width: 100%;
    display: inline-block;
    aspect-ratio: 500 / 500;
    width: calc(50% - 8px);
    height: unset;
    margin: 8px;
  }

  .-thumbnails .-thumbnail:nth-child(2n - 1) {
    margin-left: unset;
  }

  .-thumbnails .-thumbnail:nth-child(2n) {
    margin-right: unset;
  }
}

@media screen and (max-width: 576px) {
  .-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 94.444vw 31vw;
    gap: 16px;
  }

  .-content .-content-item,
  .-thumbnails {
    width: 100%;
  }

  .-thumbnails {
    white-space: nowrap;
    overflow-y: hidden !important;
    overflow-x: auto !important
  }
  
  .-thumbnails .-thumbnail {
    width: 100%;
    display: inline-block; 
    width: calc((100% - 32px) / 3);
    height: unset;
    margin: 8px;
  }

  .-thumbnails .-thumbnail:nth-child(2n - 1) {
    margin-left: 8px;
  }

  .-thumbnails .-thumbnail:nth-child(2n) {
    margin-right: 8px;
  }

  .-thumbnails .-thumbnail:first-child {
    margin-left: unset;
  }
  
  .-thumbnails .-thumbnail:last-child {
    margin-right: unset;
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}</style>