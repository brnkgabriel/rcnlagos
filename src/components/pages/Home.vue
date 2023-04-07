<template>
  <div class="-home-component">
    <div class="-hero-banner -row -inner">
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
    <div v-if="shouldShowVideoSlider" class="-home-video-slider -posrel -row -inner">
      <!-- <video autoplay controls loop playsinline class="-video-tag">
        <source :src="videoSliderURL" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
      <iframe :src="videoSliderURL"></iframe>
    </div>
    <div v-if="shouldShowVideoSlider" class="-programRegistration -row -inner">
      <NuxtLink href="/registration" class="-btn">Register</NuxtLink>
    </div>
    <div v-if="!shouldShowVideoSlider" class="-home-slider -posrel -row -inner">
      <div class="-rebirth-priesthood-transformation -posabs">
        <p class="-txt -rebirth">rebirth</p>
        <p class="-txt -priesthood">priesthood</p>
        <p class="-txt -transformation">transformation</p>
      </div>
      <div class="-sliders -posabs" v-slide>
        <img v-if="globalState.sliders?.length === 0" class="active" src="/images/1326x602.png"
          alt="homepage slider skeleton" />
        <img v-for="(slider, idx) in globalState.sliders" :key="idx" :class="idx === 0 ? 'active' : ''"
          :src="slider.image" :alt="slider.slideNo" />
      </div>
    </div>
    <div class="-ourvalues -row -inner">
      <div class="-title-wrap">
        <span class="-horizontal-line"></span>
        <h5 class="-txt -subhead">our values</h5>
        <span class="-horizontal-line"></span>
      </div>
      <div class="-values">
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
      <div class="-inner">

        <div class="-title-wrap">
          <h5 class="-txt -subhead">our programs</h5>
          <p class="-subline">Join us in God's presence</p>
        </div>
        <div class="-programs">
          <sProgramCategory v-if="!isRemoteDataLoaded" v-for="(program, idx) in skeletonProgramCategories"
            :program="program" :key="idx" />
          <ProgramCategory v-if="isRemoteDataLoaded" v-for="(program, idx) in globalState.programCategories"
            :program="program" :key="idx" />
        </div>
      </div>
    </div>
    <div class="-latestmessage -row -inner">
      <div class="-meet-our-pastors -posrel">
        <div class="-note -posabs">
          <div class="-title">
            <h5 class="-meet-our">meet our</h5>
            <h3 class="-pastors -headfont">pastors</h3>
          </div>
          <p class="-about">Austin Ukporhe is the Point man (Resident Pastor) Remnant Christian Network, Lagos chapter.
            Raised in the Northern city of Sokoto, Rev Austin was trained in the peculiar firebrand evangelism of
            Nigeria's Christian North and was ordained as a Pastor in 2001. He has experienced countless and diverse
            workings of the faithfulness of God for over 17 years.</p>
          <div class="-cta">
            <NuxtLink href="/pastors/austin-ukporhe" class="-btn -readmore">read more</NuxtLink>
            <NuxtLink href="/pastors" class="-btn -meetallpastors">meet all pastors</NuxtLink>
          </div>
        </div>
        <img v-loaded class="loaded" src="/images/RevAustin_Transparent.png" alt="Rev. Austin Transparent Picture">
      </div>
      <div class="-message">
        <iframe class="-video" :src="latestMessage"></iframe>
        <div class="-note">
          <h5 class="-watch-latest-message -headfont">watch latest message</h5>
          <NuxtLink href="/programs" class="-see-all-messages -btn">see all messages</NuxtLink>
        </div>
      </div>
    </div>
    <div class="-blog -posrel -row">
      <div class="-blog-wrap -inner">

        <div class="-title-wrap">
          <h5 class="-txt -subhead">blog</h5>
          <p class="-subline">A community board seasoned to rejuvinate your heart</p>
        </div>
        <!-- <div class="-content">
          <div class="-content-item -selected -posrel">
            <div class="-post -posabs">
              <div class="-directionalbutton" data-type="button"></div>
              <div class="-postcontent" v-html="reorderedBlogs[0]?.htmlContent"></div>
            </div>
            <div class="-imgwrap">
              <img v-if="!isRemoteDataLoaded" src="/images/680x680.png" alt="blog skeleton" />
              <img v-if="isRemoteDataLoaded" class="opacity-0" v-loaded :src="reorderedBlogs[0]?.banner"
                :alt="reorderedBlogs[0]?.title">
            </div>
          </div>
          <div class="-content-item -thumbnails">
            <sBlogThumbnail v-if="!isRemoteDataLoaded" v-for="(blog, idx) in skeletonBlogs" :key="idx" :blog="blog" />
            <BlogThumbnail v-if="isRemoteDataLoaded" v-for="(blog, idx) in reorderedBlogs" :key="idx" :blog="blog" />
          </div>
        </div> -->
        <BlogPartial v-if="isRemoteDataLoaded" :blogs="blogs" />
        <sBlogPartial v-if="!isRemoteDataLoaded" :blogs="skeletonBlogs" />
        <div class="-bottom">
          <NuxtLink href="/blog" class="-visitblog -btn">visit our blog</NuxtLink>
        </div>
      </div>
    </div>
    <div class="-testify -posrel -row">
      <div class="-inner">
        <div class="-title-wrap">
          <h5 class="-txt -subhead">testimonials</h5>
          <p class="-subline">Read the life inspiring encounters of our members</p>
        </div>
        <div class="-testimonials -posrel">
          <div class="-directionalbutton -prev absolute" data-dir="prev" data-type="testimonialbtn"></div>
          <div class="-directionalbutton -next absolute" data-dir="next" data-type="testimonialbtn"></div>
          <div class="-wrap -posrel">
            <TestimonialCard v-for="(testimonial, idx) in globalState.testimonials" :class="idx === 0 ? 'active' : ''"
              :key="idx" :testimonial="testimonial" />
          </div>
        </div>
        <div class="-bottom">
          <NuxtLink href="/testimony" class="-btn">share your testimony with us</NuxtLink>
        </div>
      </div>
    </div>
    <div class="-subscription-upcoming -posrel px-4 -row -inner">
      <div class="-subup -subscription">
        <div class="-title-wrap">
          <h5 class="-txt -subhead">join our community</h5>
          <p class="-subline">Get the latest updates about our programs, blogs and other public related activities</p>
        </div>
        <form @submit.prevent="handleSubscription" class="-form-field">
          <input v-model="email" type="email" class="-subscribe" placeholder="Email address" required />
          <button type="submit" class="-btn -posrel">
            <span class="-clickable -posabs" data-type="subscribe"></span>
            <span class="-spin-loader"></span>
            <span class="-txt">subscribe</span>
          </button>
        </form>
        <p class="-status" data-type="error"></p>
        <p class="-your-data">
          <span>Your data is safe in our hands</span>
          <NuxtLink class="underline font-semibold" href="/privacy">Privacy Policy</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { vSlide, vLoaded } from "~~/src/helpers/directives"
import ProgramCategory from "../partials/ProgramCategory.vue";
import sProgramCategory from "../skeletons/sProgramCategory.vue";
import BlogPartial from "../partials/BlogPartial.vue";
import sBlogPartial from "../skeletons/sBlogPartial.vue";
// import BlogThumbnail from "../partials/BlogThumbnail.vue";
// import sBlogThumbnail from "../skeletons/sBlogThumbnail.vue";
import TestimonialCard from "../partials/TestimonialCard.vue";
import { iApiOptions, iBlog, iMessage, iProgram, iUpcomingProgram } from "~~/src/types";
import { Controller } from "~~/src/helpers/controller";
import { useGtag } from "vue-gtag-next"

const { event } = useGtag()

const { globalState } = useGlobals()
const isRemoteDataLoaded = computed(() => (globalState.value.programCategories?.length as number) > 0)
// const reorderedBlogs = computed<iBlog[]>(() => reorder(globalState.value.blogs as iBlog[]))
const blogs = computed(() => (globalState.value.blogs as iBlog[]).slice(0, 3))
const latestMessage = computed(() => {
  if ((globalState.value.programs as iProgram[]).length > 0) {
    const url = (globalState.value.programs as iProgram[])[0].videourl
    return youTubeLinkToEmbedLink(url as string)
  }
  return "https://www.youtube.com/embed/1MkkwkXdvGk"
})

const shouldShowVideoSlider = computed(() => {
  const upcomingPrograms = globalState.value.upcomingPrograms ? (globalState.value?.upcomingPrograms as iUpcomingProgram[]) : []
  if (upcomingPrograms.length > 0) {
    const isFuture = Date.now() < +new Date(upcomingPrograms[0].datetime as string)
    return isFuture ? true : false
  }
  return false
})

const videoSliderURL = computed(() => {
  const upcomingPrograms = globalState.value.upcomingPrograms ? (globalState.value?.upcomingPrograms as iUpcomingProgram[]) : []
  if (upcomingPrograms.length > 0) {
    const url = upcomingPrograms[0].videourl as string
    return youTubeLinkToEmbedLinkAutoplay(url)
    // return url
  }
  return ""
})

const email = ref("")

const handleSubscription = () => {

  event('homepage_subscription', {
    'name': "subscribed",
    'value': 1
  })
  const messages: iMessage = {
    errorMessage: "You've already subscribed",
    successMessage: "Successfully subscribed"
  }

  const apiOptions: iApiOptions = {
    collection: constants.RCNLAGOSCOLLECTION,
    id: constants.SUBSCRIBERSID,
    dataToStore: {
      date: new Date().toLocaleString(),
      email: email.value
    },
    wrapperHTML: el(constants.SUBSCRIPTIONWRAPQUERY) as HTMLElement,
    statusHTML: el(constants.SUBSCRIPTIONSTATUSQUERY) as HTMLElement,
  }
  postForm(apiOptions, messages, constants.SUBSCRIBEAPI)
}

let controller: Controller
onMounted(() => {
  controller = new Controller()
  controller.start()
})

onBeforeUnmount(() => {
  controller.stop()
})

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

.-home-video-slider {
  aspect-ratio: 560/315;
  padding: unset !important;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.-home-video-slider iframe,
.-home-video-slider video {
  width: 100%;
  height: 100%;
}

.-home-slider .-sliders {
  width: 87.7%;
  height: 100%;
  top: 0;
  right: 0;
}

.-programRegistration {
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  padding-bottom: 16px;
  text-align: center;
}

.-ourvalues .-title-wrap {
  padding-bottom: 16px;
  flex-direction: row;
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
  z-index: 3;
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

.-blog {
  background-color: var(--rcnlighterbg);
}

/* .-blog .-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.-blog .-content .-content-item {
  width: calc((100% - 16px)/2);
  aspect-ratio: 500/500;
  overflow: hidden;
}

.-blog .-selected .-post {
  background-color: rgba(0, 0, 0, .4);
  width: 100%;
  top: 0;
  height: 100%;
  transform: translateY(calc(100% - 40px));
  border-radius: 4px;
}

.-blog .-selected img {
  width: 100%;
  border-radius: 4px;
}

.-blog .-selected .-post .-postcontent {
  padding: 8px;
  padding-top: 48px;
  height: 100%;
  overflow: auto;
  color: #fff;
  font-weight: 300;
  font-size: .9em;
  opacity: 0;
}

.-blog .-selected.active .-post .-postcontent {
  opacity: 1;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.-blog .-thumbnails {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
}

.-blog .-selected.active .-post {
  transform: translateY(0%);
  background-color: rgba(0, 0, 0, .8);
} */

.-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.-testify {
  background-color: var(--rcnlightbg);
}

.-testify .-testimonials {
  white-space: nowrap;
  overflow-x: auto;
  position: relative;
}

.-testify .-directionalbutton[data-dir=prev],
.-testify .-directionalbutton[data-dir=next] {
  top: 50%;
}

.-testify .-directionalbutton[data-dir=prev] {
  left: 20%;
  transform: translate(calc(-100% - 8px), -50%) scale(1);
}

.-testify .-directionalbutton[data-dir=next] {
  left: calc(80% + 8px);
  transform: translateY(-50%) scale(1);
}

#testimonials .-directionalbutton[data-dir=next] {
  left: calc(80% + 8px);
  transform: translateY(-50%) scale(1);
}

.-testify .-testimonials .-wrap {
  width: 60%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  height: 249px;
}

.-testify .-directionalbutton[data-dir=prev]::before {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.-testify .-directionalbutton[data-dir=next]::before {
  transform: translate(-50%, -50%) rotate(135deg);
}

.-subscription-upcoming {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  max-width: 576px;
  align-items: center;
}

.-subscription-upcoming .-subup {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;
}


.-subscription-upcoming .-subup .-img {
  width: 100%;
}

.-subscription-upcoming .-subup input {
  width: 100%;
}

.-upcoming .-title-wrap {
  padding-bottom: unset;
}

.-subscription-upcoming .-subup .-form-field .-btn,
.-upcoming-register-btn {
  text-align: center;
}

.-subscription-upcoming .-subup .-form-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  width: 100%;
}

.-subscription-upcoming .-subup.-loading {
  pointer-events: none;
}

.footer-social-wrap .-partner-btn {
  background-color: #fff !important;
  box-shadow: 0px 4px 20px -5px #fff !important;
  color: var(--global-palette3) !important;
  display: block;
  margin-top: 10px;
  width: fit-content;
}

.-your-data {
  display: flex;
  column-gap: 4px;
  justify-content: flex-start;
  align-items: center;
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

  /* .-blog .-thumbnails {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    grid-template-rows: calc((100% - 16px)/2) calc((100% - 16px)/2);
  } */

  .-testify .-testimonials .-wrap {
    width: 80%;
  }

  .-testify .-directionalbutton[data-dir=next] {
    left: calc(90% + 8px);
  }

  .-testify .-directionalbutton[data-dir=prev] {
    left: 10%;
  }

  .-subscription-upcoming {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }

  .-subscription-upcoming .-subup .-form-field,
  .-subscription-upcoming .-subup {
    align-items: center;
  }

  .-subscription-upcoming .-subup .-img,
  .-subscription-upcoming .-subup .-img img {
    width: 100%;
  }
}

@media screen and (max-width: 576px) {
  .-welcome {
    font-size: 16px;
  }

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
    font-size: 32px;
  }

  .-hero-ctas,
  .-hero-ctas a {
    width: 100%;
  }

  .-hero-ctas {
    column-gap: unset;
    row-gap: 8px;
    flex-direction: column;
    width: calc(100% - 32px);
    margin: 0 auto;
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


  .-programRegistration .-btn {
    width: 100%;
    text-align: center;
  }

  .-ourvalues .-values {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  .-ourvalues .-title-wrap {
    row-gap: 8px;
    flex-direction: column;
  }

  .-title-wrap span {
    width: 100%;
  }

  .-ourvalues .-title-wrap .-txt {
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

  /* .-blog .-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 94.444vw 31vw;
    gap: 16px;
  }

  .-blog .-content .-content-item,
  .-blog .-thumbnails {
    width: 100%;
  }


  .-blog .-thumbnails {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  } */

  .-bottom .-btn {
    width: 100%;
    text-align: center;
  }

  .-testify .-testimonials .-wrap {
    width: 100%;
  }

  .-testify .-directionalbutton[data-dir=next],
  .-testify .-directionalbutton[data-dir=prev] {
    background-color: rgba(0, 0, 0, .6);
  }

  .-testify .-directionalbutton[data-dir=next]::before,
  .-testify .-directionalbutton[data-dir=prev]::before {
    border-color: #fff;
  }



  .-testify .-directionalbutton[data-dir=prev] {
    left: 8px;
    transform: translate(0%, -50%) scale(1);
  }

  .-testify .-directionalbutton[data-dir=next] {
    left: calc(100%);
    transform: translate(calc(-100% - 8px), -50%) scale(1);
  }

  .-subscription-upcoming {
    width: 100%;
  }

  .-your-data {
    row-gap: 4px;
    align-items: center;
    flex-direction: column;
  }

  .-see-all-messages {
    width: 100%;
    text-align: center;
  }

  .-subscription-upcoming .-subup .-form-field .-btn {
    width: 100%;
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

  .-testify .-testimonials .-wrap {
    height: 350px;
  }
}

@media screen and (min-width: 320px) and (max-width: 420px) {
  .-rebirth-priesthood-transformation .-txt {
    font-size: 11px;
    padding: 8px;
  }
}
</style>