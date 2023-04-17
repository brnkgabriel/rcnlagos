<template>
  <div class="-adullam">
    <iframe :src="url" :onload="($event: Event) => computeHeight($event)"></iframe>
  </div>
</template>
<script setup lang="ts">

defineProps<{
  url: string
}>()

const computeHeight = (event: Event) => {
  const iframe = event.target as HTMLIFrameElement
  const iframeDocument = iframe.contentWindow?.document
  const iframeHeight = iframeDocument?.documentElement.scrollHeight
  console.log("iframe height is", iframeHeight)
}
</script>
<style scoped>

.-adullam,
.-adullam iframe {
  width: 100%;
  height: 835.2px;
}

</style>