<template>
  <div class="-home-component">
    <div class="-hero-banner -row">
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
    <div class="-home-slider relative -row">
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
    <div class="-ourvalues -row">
      <div class="-title-wrap">
        <span class="-horizontal-line"></span>
        <h5 class="-txt -subhead">our values</h5>
        <span class="-horizontal-line"></span>
      </div>
      <div class="-values px-4">
        <p>dedication</p>
        <p>relevance</p>
        <p>excellence</p>
        <p>accountability</p>
        <p>resilience</p>
        <p>forbearance</p>
        <p>faithfulness</p>
      </div>
    </div>
    <div class="-ourprograms -row">
      <div class="-title-wrap px-4 flex-col">
        <h5 class="-txt -subhead">our programs</h5>
        <p class="-subline">Join us in God's presence</p>
      </div>
      <div class="-programs px-4">
        <sProgram v-if="!globalState.programs?.length" v-for="(program, idx) in skeletonPrograms" :program="program"
          :key="idx" />
        <Program v-if="globalState.programs" v-for="(program, idx) in globalState.programs" :program="program"
          :key="idx" />
      </div>
    </div>
    <div class="-latestmessage -row relative">
      <div class="-meet-our-pastors">
        <div class="-note -posabs">
          <div class="-title">
            <h5 class="-meet-our">meet our</h5>
            <h3 class="-pastors">pastors</h3>
          </div>
          <p class="-about">Austin Ukporhe is the Point man ( Resident Pastor) Remnant Christian Network, Lagos chapter.
            Raised in the Northern city of Sokoto, Rev Austin was trained in the peculiar firebrand evangelism of
            Nigeria’s
            Christian North and was ordained as a Pastor in 2001. He has experienced countless and diverse workings of the
            faithfulness of God for over 17 years.</p>
          <div class="-cta">
            <a href="#" class="-btn -readmore">read more</a>
            <a href="#" class="-btn -meetallpastors">meet all pastors</a>
          </div>
        </div>
        <img v-loaded class="opacity-0" src="https://firebasestorage.googleapis.com/v0/b/rcnlagos-f152a.appspot.com/o/images%2Frev-austin.png?alt=media&amp;token=e26f1901-2347-4c6d-9714-1dbdc1602fa6"
          alt="">
      </div>
      <iframe class="-video" src="https://www.youtube.com/embed/1MkkwkXdvGk"></iframe>
      <div class="-note">
        <h5 class="-watch-latest-message">watch latest message</h5>
        <a href="#" class="-see-all-messages -btn">see all messages</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { vSlide, vLoaded } from "~~/src/helpers/directives"
import sProgram from "../skeletons/sProgram.vue";
import Program from "../partials/Program.vue";

const { globalState } = useGlobals()
const isProgramLoaded = computed(() => (globalState.value.programs?.length as number) > 0)


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

.-title-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 16px;
}

.-title-wrap span {
  height: 1px;
  width: 30%;
  background-color: var(--rcntext);
  opacity: .5;
}

.-title-wrap .-txt {
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  margin: unset;
  color: var(--rcnaccentblue);
}

.-ourvalues .-title-wrap .-txt {
  width: 30%;
}

.-ourvalues .-values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  margin: 0 auto;
  gap: 8px;
}

.-ourvalues .-values p {
  background-color: var(--rcnlighterbg);
  text-transform: capitalize;
  border-radius: 2px;
  margin: unset !important;
  padding: 8px 16px;
  text-align: center;
  font-weight: 500;
}

.-ourprograms .-programs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.-ourprograms {
  background-color: var(--rcnlightbg);
  padding-bottom: 550px !important;
}

@media screen and (max-width: 1024px) {
  .-rebirth-priesthood-transformation .-txt {
    font-size: 28px;
    line-height: 32px !important;
  }

  .-ourvalues .-values {
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
  }
}

@media screen and (max-width: 768px) {
  .-rebirth-priesthood-transformation .-txt {
    font-size: 16px;
    line-height: 24px !important;
  }

  .-ourvalues .-values {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }


  .-ourprograms .-programs {
    grid-template-columns: repeat(2, 1fr);
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

  .-ourvalues .-values {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  .-title-wrap {
    flex-direction: column;
    padding-bottom: 16px;
    text-align: center;
  }

  .-ourvalues .-title-wrap {
    row-gap: 8px;
  }

  .-title-wrap span {
    width: 100%;
  }

  .-ourprograms .-programs {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {
  .-rebirth-priesthood-transformation .-txt {
    font-size: 11px;
    padding: 8px;
  }
}</style>