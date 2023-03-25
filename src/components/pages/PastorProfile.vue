<template>
  <div class="-inner -about">
    <div class="-hero-header">
      <div class="-left">
        <h1 class="-headfont -desktop">
          <span>{{ pastor?.title }}</span>
          <br/>
          <span>{{ pastor?.name }}</span>
        </h1>
        <h1 class="-headfont -mobile">
          <span>{{ pastor?.title }}</span>
          <br/>
          <span>{{ pastor?.name }}</span>
        </h1>
        <img class="-signature" src="/images/signature.png" alt="rcn signature" />
      </div>
      <div class="-right relative">
        <img v-loaded class="-pastor absolute" :src="pastor?.image" :alt="pastor?.name" />
        <img class="-bg-img" src="/images/icon_500x500.png" alt="rcn icon" />
      </div>
    </div>

    <div class="-content px-4">
      <blockquote class="-letter" v-html="pastor?.profile"></blockquote>
    </div>
    
    <div class="-footnotes px-4">
      <NuxtLink href="/pastors" class="-btn">back to pastors</NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { vLoaded } from '~~/src/helpers/directives';
import { iPastorate } from '~~/src/types';
const params = useRoute().params
const id = params.id as string

const { globalState } = useGlobals()

const pastor = computed<iPastorate>(() => {
  const pst = globalState.value.pastorates?.filter((pastor: iPastorate) => id.toLowerCase() === slug(pastor))[0]
  return pst as iPastorate
})

</script>
<style scoped>
.-about {
  padding: 16px 0;
}

.-hero-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  gap: 96px;
  margin-bottom: 16px;
  width: calc(100% - 32px);
  margin: 0 auto;
}

.-hero-header .-left h1 {
  font-weight: bold;
  font-size: 50px;
  line-height: 1;
  color: var(--rcnaccentblue);
}

.-hero-header .-left .-signature {
  width: 130px;
}

.-hero-header .-left {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-self: center;
  text-align: center;
}

.-hero-header .-right {
  align-self: center;
  justify-self: flex-start; 
}

.-hero-header .-right .-bg-img {
  width: 70%;
  margin-right: auto;
  background-color: var(--rcnaccentblue);
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 16px 2px rgba(0, 0, 0, 0.3);
}

.-hero-header .-right .-pastor {
  position: absolute;
  height: 100%;
  border-radius: 50%;
}

.-content {
  margin: 0 auto; 
  width: 100%;
  margin-top: 32px;
}

.-content .-subhead {
  text-transform: uppercase;
}


.-content .-letter {
  display: flex;
  flex-direction: column;
  row-gap: 16px;

}
 
.-mobile {
  display: none;
}

.-footnotes {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  text-align: center;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-desktop {
    display: none;
  }

  .-mobile {
    display: block;
    text-align: center;
  }

  .-content {
    width: calc(100% - 32px);
    margin: 0 auto;
  }

  .-content {
    margin-top: 32px;
  } 

  .-hero-header .-left h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 1;
    color: var(--rcnaccentblue);
  }

  .-hero-header .-left .-signature {
    width: 100px;
  }
}

@media screen and (max-width: 576px) {
  .-hero-header {
    gap: 8px;
  }

  .-hero-header .-right .-bg-img {
    width: 100%;
  } 

  .-footnotes a {
    width: 100%;
  }
}

@media screen and (max-width: 420px) { 
}

@media screen and (min-width: 320px) and (max-width: 420px) {}</style>