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
    <div class="-latestmessage -row">
      <div class="-meet-our-pastors relative">
        <div class="-note absolute">
          <div class="-title">
            <h5 class="-meet-our">meet our</h5>
            <h3 class="-pastors -headfont">pastors</h3>
          </div>
          <p class="-about">Austin Ukporhe is the Point man (Resident Pastor) Remnant Christian Network, Lagos chapter.
            Raised in the Northern city of Sokoto, Rev Austin was trained in the peculiar firebrand evangelism of
            Nigeria's Christian North and was ordained as a Pastor in 2001. He has experienced countless and diverse
            workings of the faithfulness of God for over 17 years.</p>
          <div class="-cta">
            <a href="#" class="-btn -readmore">read more</a>
            <a href="/pastors" class="-btn -meetallpastors">meet all pastors</a>
          </div>
        </div>
        <img v-loaded class="loaded"
          src="https://firebasestorage.googleapis.com/v0/b/rcnlagos-f152a.appspot.com/o/images%2Frev-austin.png?alt=media&amp;token=e26f1901-2347-4c6d-9714-1dbdc1602fa6"
          alt="">
      </div>
      <div class="-message">
        <iframe class="-video" src="https://www.youtube.com/embed/1MkkwkXdvGk"></iframe>
        <div class="-note">
          <h5 class="-watch-latest-message -headfont">watch latest message</h5>
          <a href="#" class="-see-all-messages -btn">see all messages</a>
        </div>
      </div>
    </div>
    <div class="-blog relative px-4 -row">
      <div class="-title-wrap flex-col">
        <h5 class="-txt -subhead">blog</h5>
        <p class="-subline">A community board seasoned to rejuvinate your heart</p>
      </div>
      <div class="-content">
        <div class="-content-item -selected -posrel">
          <div class="-post -posabs">
            <div class="-button" data-type="button"></div>
            <div class="-postcontent">
              <p>#HeartCheckTuesday: Walking before Working</p>
              <p>How often do you check out your level of walking with God and working for God?</p>
              <p>Do you know there's a possibility of working for God, yet not walking with Him? Oh yes, as simple as this
                could sound, many people are not so sure of what they're doing!. Come to think of it, you can't obviously
                speak of Kingdom service without a personal walk with God. Do you know why? The first posture in kingdom
                service is the POSTURE OF DEVOTION.</p>
              <p>Can we start our heart check from here today? What does your personal devotion to God look like? Personal
                devotion is meant to be a moment of deep and sincere intimacy with God, that's why it's called
                PERSONAL.<br>You must first understand followership even before workmanship; that's because it is in
                walking His standards that His precepts are displayed.</p>
              <p>2Kgs.20.3 - 'Remember now, O LORD, I pray, how I have walked before You in truth and with a loyal heart,
                and have done what was good in Your sight.'</p>
              <p>A relationship that stands over time consists of the walking, then workings of a man.</p>
              <p>Dear HeartChecker, are you sure of a WALKING relationship with God? Have you been overwhelmed and even
                carried away by your workings as kingdom service instead of walking with the one who first called
                you!!<br>It's a call for a sincere rumination, to build a WALKING relationship. Abba beckons for intimacy.
              </p>
              <p>©RCNLagos</p>
            </div>
          </div>
          <div class="-imgwrap"><img
              src="https://firebasestorage.googleapis.com/v0/b/rcnlagos-f152a.appspot.com/o/blog%2Fwalking-before-working_banner.jpg?alt=media&amp;token=f017c0a5-54f6-44d5-bdb8-a8ce0c8bd0a3"
              alt="Walking before working"></div>
        </div>
        <div class="-content-item -thumbnails">
          <div class="-thumbnail -posrel">
            <div class="-img" data-blog="Walking" before="" working="" data-type="blog"><img
                src="https://firebasestorage.googleapis.com/v0/b/rcnlagos-f152a.appspot.com/o/blog%2Fwalking-before-working_thumbnail.png?alt=media&amp;token=2ab24257-85de-45d8-90b8-8154a38bb0ea"
                alt="Walking before working" data-type="blog" data-blog="Walking before working"></div>
            <div class="-details">
              <div class="-clickable" data-blog="Walking before working" data-type="blog"></div>
              <div class="-txt">
                <h5 class="-title">Walking before working</h5>
                <p class="-subline">How often do you check out your level of walking with God and working for God?</p>
              </div>
              <div class="-cta"><a href="#blog" class="-btn -readmore" data-type="blog"
                  data-blog="Walking before working">read more</a><span class="-date">March 20, 2023</span></div>
            </div>
          </div>
          <div class="-thumbnail -posrel">
            <div class="-img" data-blog="Is" he="" your="" shepherd="" data-type="blog"><img
                src="https://firebasestorage.googleapis.com/v0/b/rcnlagos-f152a.appspot.com/o/blog%2Fis-he-your-shepherd_thumbnail.png?alt=media&amp;token=348baee5-ab11-4d34-b704-99bb6ac45bee"
                alt="Is He your Shepherd" data-type="blog" data-blog="Is He your Shepherd"></div>
            <div class="-details">
              <div class="-clickable" data-blog="Is He your Shepherd" data-type="blog"></div>
              <div class="-txt">
                <h5 class="-title">Is He your Shepherd</h5>
                <p class="-subline">Yes, you say you love the Lord. Yes, you are a worker in church. Yes, you go for
                  Evangelism. You heal the sick in His name, and there's so much on your account as regards the Kingdom.
                  Here's a question to ponder upon, Is He your Shepherd?</p>
              </div>
              <div class="-cta"><a href="#blog" class="-btn -readmore" data-type="blog"
                  data-blog="Is He your Shepherd">read more</a><span class="-date">March 17, 2023</span></div>
            </div>
          </div>
          <div class="-thumbnail -posrel">
            <div class="-img" data-blog="Stick" to="" the="" instruction="" data-type="blog"><img
                src="https://firebasestorage.googleapis.com/v0/b/rcnlagos-f152a.appspot.com/o/blog%2Fstick-to-the-instruction_thumbnail.png?alt=media&amp;token=c8e13c4c-7bc0-47e7-b376-3f0d397a269f"
                alt="Stick to the Instruction" data-type="blog" data-blog="Stick to the Instruction"></div>
            <div class="-details">
              <div class="-clickable" data-blog="Stick to the Instruction" data-type="blog"></div>
              <div class="-txt">
                <h5 class="-title">Stick to the Instruction</h5>
                <p class="-subline">One thing you should never forget about God is the fact that His word never returns
                  without fulfilling the purpose to which it was sent</p>
              </div>
              <div class="-cta"><a href="#blog" class="-btn -readmore" data-type="blog"
                  data-blog="Stick to the Instruction">read more</a><span class="-date">March 14, 2023</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="-bottom">
        <a href="/blog" class="-visitblog -btn">visit our blog</a>
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
}

.-latestmessage {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: var(--global-palette7);
  gap: 16px;
}

.-latestmessage .-message {
  display: grid;
  grid-template-columns: 67% 33%;
  gap: 16px;
}

.-latestmessage .-meet-our-pastors {
  background: radial-gradient(var(--rcntext), var(--rcnaccentblue));
  border-radius: 4px;
  width: 100%;
}

.-latestmessage .-meet-our-pastors .-note {
  position: absolute;
  left: 8.7%;
  top: 50%;
  color: #fff;
  width: 45%;
  row-gap: 32px;
  transform: translateY(-50%);
}

.-latestmessage .-meet-our-pastors .-note .-meet-our {
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.5em;
  margin: unset;
}

.-latestmessage .-meet-our-pastors .-note .-pastors {
  text-transform: capitalize;
  color: #fff;
  font-size: 4.5em;
  margin: unset;
  font-weight: 500;
  line-height: 1;
}

.-latestmessage .-meet-our-pastors .-note .-about {
  margin: unset !important;
}

.-latestmessage .-meet-our-pastors .-note .-cta {
  display: flex;
  justify-content: flex-start;
  column-gap: 8px;
}

.-latestmessage .-meet-our-pastors .-note .-cta .-readmore {
  background: rgba(0, 0, 0, 0) !important;
  border: 2px solid #fff;
  box-shadow: 0 2px 16px -5px #fff;
}

.-latestmessage .-meet-our-pastors .-note .-cta a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.-latestmessage .-meet-our-pastors .-note .-cta .-meetallpastors {
  background: #fff;
  color: var(--rcnaccentblue) !important;
  box-shadow: 0 2px 16px -5px #fff;
}

.-latestmessage .-meet-our-pastors img {
  width: 100%;
}

.-latestmessage .-video {
  border: unset;
  width: 100%;
  height: 440px;
  border-radius: 4px;
}

.-latestmessage .-note {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.-latestmessage .-note .-watch-latest-message {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 4em;
  line-height: 1;
}

.-blog .-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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

  .-ourprograms {
    padding-bottom: 32px !important;
  }

  .-latestmessage {
    height: unset;
    grid-template-columns: repeat(1, 1fr);
    padding-top: 32px !important;
    gap: 16px;
  }

  .-latestmessage .-meet-our-pastors {
    position: relative;
    transform: unset !important;
    grid-column-end: 3;
    grid-column-start: 1;
    width: unset !important;
    left: unset !important;
  }

  .-latestmessage .-video {
    grid-column-start: 1;
    grid-column-end: 3;
    aspect-ratio: 560/315;
    height: unset !important;
  }

  .-latestmessage .-message .-note {
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
  }

  .-latestmessage .-note .-watch-latest-message {
    margin: unset;
    font-size: 2.5em;
    font-weight: 700;
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

  .-latestmessage .-meet-our-pastors .-note .-title {
    display: flex;
    align-items: baseline;
    column-gap: 4px;
  }

  .-latestmessage .-meet-our-pastors .-note .-pastors {
    font-size: 3em;
    font-weight: 600;
  }

  .-latestmessage .-meet-our-pastors .-note {
    row-gap: 8px;
    left: 3%;
    width: 70%;
  }

  .-latestmessage .-meet-our-pastors .-note .-cta .-btn {
    padding: 8px;
    line-height: 1;
    font-size: .9em;
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

  .-latestmessage .-meet-our-pastors>.-note {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: unset !important;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 4px;
    row-gap: 8px;
    padding: 8px;
  }

  .-latestmessage .-meet-our-pastors .-note .-about {
    line-height: 1.5 !important;
    font-size: .8em;
  }

  .-latestmessage .-meet-our-pastors .-note .-pastors {
    font-size: 2em;
  }

  .-latestmessage .-message .-note {
    flex-direction: column;
    row-gap: 8px;
    padding-top: unset;
  }
}

@media screen and (max-width: 420px) {
  .-latestmessage .-meet-our-pastors .-note .-about {
    font-size: .6em;
    letter-spacing: .5px;
  }

  .-latestmessage .-meet-our-pastors .-note {
    row-gap: 4px;
  }

  .-latestmessage .-meet-our-pastors .-note .-meet-our {
    font-size: .8em;
  }

  .-latestmessage .-meet-our-pastors .-note .-pastors {
    font-size: 1.2em;
  }

  .-latestmessage .-meet-our-pastors .-note .-cta .-btn {
    padding: 8px;
    line-height: 1;
    font-size: .8em;
  }

  .-latestmessage .-note .-watch-latest-message {
    font-size: 1.5em;
  }
}

@media screen and (min-width: 320px) and (max-width: 420px) {
  .-rebirth-priesthood-transformation .-txt {
    font-size: 11px;
    padding: 8px;
  }
}
</style>