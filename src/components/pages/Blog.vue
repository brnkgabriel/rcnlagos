<template>
  <div class="-blog">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Blog</h1>
          <p>A community board seasoned to rejuvinate your heart</p>
        </div>
        <img class="-desktop" src="/images/partners_1511x495.jpg" alt="partners banner" />
        <img class="-mobile" src="/images/partners_1000x495.jpg" alt="partners banner" />
      </div>
      <div class="-blog-wrap">
        <BlogPartial v-if="isRemoteDataLoaded" :blogs="blogs" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGtag } from "vue-gtag-next"
import BlogPartial from "../partials/BlogPartial.vue";
import { iBlog } from "~~/src/types";

const { event } = useGtag()
const { globalState } = useGlobals()

const isRemoteDataLoaded = computed(() => (globalState.value.blogs as iBlog[]).length > 0)
const blogs = computed(() => globalState.value.blogs as iBlog[])

</script>
<style scoped>
.-blog>.-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-blog .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
}

.-blog .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.-blog .-hero-banner .-hero-title h1,
.-blog .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-blog .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-blog img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-form-blog-us {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-blog-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}
 

.-phoneNumber,
.-subject,
.-message {
  grid-column-start: 1;
  grid-column-end: 3;
}

.-message {
  resize: none;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-blog .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-blog .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-blog .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

  .-blog-form,
  .-form-blog-us {
    grid-template-columns: repeat(1, 1fr)
  }

  .-phoneNumber,
  .-subject,
  .-message {
    grid-column-start: 1;
    grid-column-end: 2;
  }
}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {

  .-blog .-hero-banner .-hero-title p {
    font-size: .8em;
  }

  .-blog .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>