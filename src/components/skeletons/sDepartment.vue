<template>
  <div class="-department -posrel">
    <img src="/images/560x315.png" alt="" />
    <div class="-details">
      <h5 class="-subhead"></h5>
      <p class="-description"></p>
      <div class="-cta">
        <div class="-readmore"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>

.-readmore,
.-description,
.-subhead {
  background-color: var(--rcnlightbg);
}
.-department {
  border-radius: 4px;
  background-color: white;
  box-shadow: var(--box-shadow);
  overflow: hidden;
}

.-department .-subhead {
  margin-top: unset !important;
  height: 24px;
  width: 50%;
}

.-department img {
  width: 100%;
  aspect-ratio: 560 / 315;
}

.-department .-details {
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.-department .-description {
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 100%;
  height: 58.5px;
}

.-department .-cta {
  display: flex;
  justify-content: flex-end;
}

.-department .-readmore {
  height: 36px;
  width: 40%;
}
</style>