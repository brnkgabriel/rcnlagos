<template>
  <div class="-thumbnail relative">
    <div class="-img" :data-blog="blog.title">
      <img src="/images/680x680.png" :alt="blog.title" data-type="blog" :data-blog="blog.title">
    </div>
    <div class="-details">
      <div class="-clickable" :data-blog="blog.title" data-type="blog"></div>
      <div class="-txt">
        <h5 class="-title bg-rcnbg-900 w-3/4 h-[25px]">{{ blog.title }}</h5>
        <p class="-subline bg-rcnbg-900 w-full h-[55px]">{{ blog.subline }}</p>
      </div>
      <div class="-cta">
        <a href="#blog" class="-btn -readmore h-[32px] w-2/6" data-type="blog" :data-blog="blog.title"></a>
        <span class="-date bg-rcnbg-900 w-1/4 h-[20px]">{{ blog.datetime }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iBlog } from '~~/src/types';

defineProps<{
  blog: iBlog
}>()
</script>
<style scoped>
.-thumbnail {
  display: flex;
  height: calc((100% - 32px)/3);
  align-items: flex-start;
  column-gap: 16px;
  border-radius: 4px;
  width: 100%;
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
}

.-thumbnail .-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}

.-thumbnail .-details .-txt {
  width: 100%;
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
  font-size: 1.3em;
  margin-bottom: 8px !important;
}

.-thumbnail .-details .-cta > * {
  background-color: var(--rcnlightbg);
}
.-thumbnail .-details .-cta .-btn {
  box-shadow: unset !important;
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
  }

  .-thumbnail .-details .-txt {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  .-thumbnail .-details .-title {
    margin: unset !important;
    font-size: .9em;
    text-align: center;
    width: 100%;
    color: #fff;
    line-height: 1.1;
    padding: 8px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
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