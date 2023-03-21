<template>
  <div class="-home-component">
    <div class="-hero-banner">
      <p class="-welcome">Welcome to</p>
      <h1 class="-hero-header -headfont">RCN Lagos</h1>
      <p class="-about px-4">We are a ministry with a single minded focus on restoring the prayer commission of the church
        in fulfillment of
        Jesus' proclamation in Matthew 21:13 that <strong>My house shall be called the house of prayer</strong></p>
      <div class="-hero-ctas">
        <a href="https://www.youtube.com/@RCNLagos/streams" class="-btn -stream-live">stream live</a>
        <NuxtLink href="/about" class="-btn -know-more">know more</NuxtLink>
      </div>
    </div>
    <div class="-home-slider relative">
      <div class="-rebirth-priesthood-transformation absolute">
        <p class="-txt -rebirth">rebirth</p>
        <p class="-txt -priesthood">priesthood</p>
        <p class="-txt -transformation">transformation</p>
      </div>
      <div class="-sliders absolute" v-slide>
        <img v-if="globalState.sliders?.length === 0" class="active" src="/images/1326x602.png"
          alt="homepage slider skeleton" />
        <img v-for="(slider, idx) in globalState.sliders" :key="idx" :class="idx === 0 ? 'active' : ''"
          :src="slider.image" :alt="slider.slideNo" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { vSlide } from "~~/src/helpers/directives"

const { globalState } = useGlobals()
</script>
<style scoped>
.-hero-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: url("/images/cover.png") no-repeat;
  background-position-y: 15%;
  background-position-x: center;
  background-size: 80%;
  row-gap: 32px;
  text-align: center;
}

.-welcome {
  font-size: 29px;
}

.-hero-header {
  font-size: 60px;
  color: var(--rcnaccentblue);
  font-weight: 800;
}

.-hero-banner .-about {
  width: 70%;
}

.-stream-live {}

.-know-more {
  background-color: var(--rcnlighterbg);
  box-shadow: 0px 4px 20px -5px var(--rcntext);
  color: var(--rcntext) !important;
}

.-hero-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
}

.-hero-ctas a {
  font-weight: 600;
}

.-home-slider {
  aspect-ratio: 1512 / 602;
}

.-home-slider .-sliders {
  width: 87.7%;
  height: 100%;
  top: 0;
  right: 0;
}

.-home-slider .-sliders img {
  position: absolute;
  width: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  opacity: 0;
  /* transition: opacity 1s ease-in; */
}

.-home-slider .-sliders img.active {
  opacity: 1;
}

.-rebirth-priesthood-transformation {
  bottom: 7.6%;
  left: 4.6%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  z-index: 1;
}

.-rebirth-priesthood-transformation .-txt {
  background: var(--rcnaccentorange);
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: unset !important;
  width: fit-content;
  font-size: 45.5px;
  line-height: 48px !important;
  padding: 8px 24px;
  opacity: .8;
}

@media screen and (max-width: 1024px) {
  .-rebirth-priesthood-transformation .-txt {
    font-size: 28px;
    line-height: 32px !important;
  }
}

@media screen and (max-width: 768px) {
  .-rebirth-priesthood-transformation .-txt {
    font-size: 16px;
    line-height: 24px !important;
  }
}

@media screen and (max-width: 576px) {
  .-hero-banner {
    row-gap: 8px;
    background-size: cover;
    background-position: center;
    padding: 8px 0;
    height: unset;
  }

  .-hero-banner .-about {
    width: calc(100% - 32px);
  }

  .-hero-header {
    font-size: 40px;
  }

  .-hero-ctas {
    column-gap: unset;
    row-gap: 8px;
    flex-direction: column;
  }

  .-hero-ctas,
  .-hero-ctas a {
    width: 100%;
  }

  .-home-slider {
    width: 100%;
    aspect-ratio: 1326/602;
  }

  .-rebirth-priesthood-transformation {
    bottom: 0;
    left: 0;
    flex-direction: row;
    column-gap: 8px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .-rebirth-priesthood-transformation .-txt {
    line-height: unset !important;
    padding: 8px 16px;
    font-weight: 500;
    letter-spacing: .1px;
  }

  .-home-slider .-sliders {
    width: 100%;
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}</style>