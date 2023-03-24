<template>
  <div class="-programs">
    <div class="-hero-section -inner px-4 relative">
      <div class="-filters -inner sticky -desktop">
        <h5 class="-program-selection -subhead">Programs</h5>
        <div class="relative -form-control -categories">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="-select-category-icon absolute">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z">
            </path>
          </svg>
          <select name="categories" id="selectCategory">
            <option value="Community Bible Study">Community Bible Study</option>
            <option value="Threshing Floor">Threshing Floor</option>
            <option value="Threshing Floor">Threshing Floor</option>
          </select>
        </div>
        <div class="relative -form-control -search">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="-search-icon absolute">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
          <input type="text" class="-search-input" placeholder="Search">
        </div>
      </div>
      <div class="-video-n-shorts">
        <div class="-video-wrap relative">
          <iframe :src="iframeSrc" class="-video absolute" :class="{ show }"></iframe>
          <div class="-caption absolute">
            <h1 class="-mainline -headfont">Encountering the Word</h1>
            <p class="-subline">Explore our programs and events<br>Get notified of upcoming events.</p>
            <a href="#" class="-btn -subscribe">subscribe</a>
          </div>
          <div class="-upcoming-program absolute">
            <h5 class="-subhead">upcoming program</h5>
            <p>The Convergence | April 21 - 22, 2023</p>
          </div>
          <img src="/images/programs_1500x844.jpg" alt="events hero">
        </div>
        <div class="-shorts">
          shorts
        </div>
      </div>
      <div class="-catalog">
        <RecordedProgram v-for="(program, idx) in globalState.events" :key="idx" :program="program"
          @click="showVideo(program)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iEvent } from '~~/src/types';
import RecordedProgram from '../partials/RecordedProgram.vue';

const show = ref(false)
const iframeSrc = ref(constants.DEFAULTVIDEO)

const showVideo = (program: iEvent) => {
  const embedLink = youTubeLinkToEmbedLink(program.videourl as string)
  console.log("embed link", embedLink)
  iframeSrc.value = embedLink
  show.value = true
}

const { globalState } = useGlobals()

onMounted(() => {
  document.addEventListener("scroll", () => {
    show.value = false
    iframeSrc.value = constants.DEFAULTVIDEO
  })
})
</script>
<style scoped>
.-programs {
  background-color: var(--rcnlightbg);
}

.-hero-section .-video {
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 2;
  opacity: 0;
}

.-desktop {
  display: none !important;
}

.-hero-section .-video.show {
  opacity: 1;
}

.-hero-section .-filters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  z-index: 2;
  background-color: #fff;
  padding: 8px;
  top: 72px;
  left: 0;
  z-index: 3;
}

.-hero-section .-filters .-categories .-select-category-icon,
.-hero-section .-filters .-search .-search-icon {
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  width: 24px;
  height: 24px;
}

.-hero-section .-filters #selectCategory,
.-hero-section .-filters .-search .-search-input {
  padding-left: 56px;
  height: 40px;
  width: 100%;
  border-radius: 8px;
}

.-hero-section .-filters .-program-selection {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
}

.-video-n-shorts .-caption {
  top: 40%;
  transform: translateY(-50%);
  left: 8%;
  width: 84%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 16px;
  z-index: 1;
}

.-video-n-shorts {
  position: sticky;
  top: 72px;
  left: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
}

.-video-n-shorts .-video-wrap {
  aspect-ratio: 560 / 315;
  max-width: 560px;
  background-color: black;
}

.-video-n-shorts .-caption .-mainline {
  color: white;
  font-size: 32px;
  line-height: 1;
  font-weight: bold;
}

.-video-n-shorts .-caption .-subline {
  color: white;
}

.-video-n-shorts .-caption .-subscribe.-btn {
  width: fit-content;
}

.-video-n-shorts img {
  opacity: .6;
}


.-video-n-shorts .-upcoming-program {
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px;
  width: 100%;
  z-index: 1;
  bottom: 0;
  flex-direction: column;
}

.-video-n-shorts .-upcoming-program .-left {}

.-video-n-shorts .-upcoming-program .-right {}


.-video-n-shorts .-upcoming-program h5,
.-video-n-shorts .-upcoming-program p,
.-video-n-shorts .-upcoming-program span {
  color: white;
}

.-video-n-shorts .-upcoming-program h5 {
  text-transform: uppercase;
}

.-video-n-shorts .-upcoming-program span {}

.-programs .-catalog {
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media screen and (max-width: 1024px) {
  .-hero-section .-filters {
    display: none;
  }

  .-video-n-shorts .-caption {
    width: 95%;
    left: 2.5%;
    row-gap: 4px;
  }

  .-programs .-catalog {
    grid-template-columns: repeat(3, 1fr);
  }

}

@media screen and (max-width: 768px) {

  .-hero-section .-filters {
    display: grid;
    grid-template-columns: 60% 10% 30%
  }

  .-hero-section .-filters.-desktop {
    display: none;
  }

  .-video-n-shorts {
    grid-template-columns: repeat(1, 1fr);
  }

  .-video-n-shorts .-video-wrap {
    max-width: unset !important;
  }

  .-video-n-shorts .-shorts {
    display: none;
  }

  .-video-n-shorts .-caption {
    width: 90%;
    left: 5%;
    row-gap: 4px;
  }

  .-video-n-shorts .-caption .-mainline {
    font-size: 36px;
  }
}


@media screen and (max-width: 576px) {
  .-hero-section .-video {
    left: 50%;
  }

  .-programs .-catalog {
    grid-template-columns: repeat(2, 1fr);
  }

  .-video-n-shorts .-caption[data-v-ade7f127] {
    width: calc(100% - 16px);
    left: 8px;
    row-gap: 4px;
  }

  .-video-n-shorts .-caption .-mainline {
    font-size: 24px;
  }
}

@media screen and (max-width: 420px) {
  .-hero-section .-video-n-shorts {
    aspect-ratio: 560 / 315;
  }

  .-programs .-catalog {
    grid-template-columns: repeat(1, 1fr);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {

  .-video-n-shorts .-upcoming-program h5,
  .-video-n-shorts .-upcoming-program p {
    font-size: .8em !important;
  }

  .-video-n-shorts .-upcoming-program {
    padding: 4px 8px;
  }
}

@media screen and (max-height: 567px) and (orientation: landscape) {

  /* phone landscape styles */
}</style>