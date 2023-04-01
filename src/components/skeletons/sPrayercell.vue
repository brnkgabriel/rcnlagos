<template>
  <div class="-cell">
    <div class="-img -posrel">
      <p class="-cellname"> </p>
      <img src="/images/678x452.png" alt="prayer" />
    </div>
    <div class="-details">
      <div class="-cell-row">
        <div class="-title"></div>
        <h5 class="-coordinator"></h5>
      </div>
      <div class="-cell-row">
        <div class="-title"></div>
        <p class="-address"></p>
      </div>
      <div class="-ctas-time">

        <div class="-ctas">
          <div class="-btn"></div>
          <div class="-btn"></div>
        </div>

        <div class="-time"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.-title,
.-coordinator,
.-address,
.-time,
.-ctas .-btn {
  background-color: var(--rcnlightbg);
}

.-cell-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;
}

.-title {
  height: 14px;
  width: 20%;
}

.-coordinator {
  height: 24px;
  width: 80%;
}

.-address {
  height: 55px;
  width: 100%;
}


.-ctas-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.-ctas {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
}

.-time {
  height: 22px;
  width: 30%;
}

.-ctas .-btn {
  width: 36px;
  height: 36px;
  box-shadow: unset !important;
  border-radius: 50%;
}

.-cell {
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  overflow: hidden;
}

.-cell sub {
  text-transform: capitalize;
}

.-cell-row .-address {

  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin: unset !important;
  line-height: 1.4 !important;
  height: 55px;
}

.-coordinator {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.-cell .-cellname {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: white;
  z-index: 1;
  font-weight: bold;
  font-size: 1.3em;
  width: calc(100% - 16px);
}

.-cell .-img {
  aspect-ratio: 560 / 315;
}

.-cell .-img img {
  width: 100%;
  object-fit: cover;
}

.-cell .-details {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px;
}

.-cell .-details>h5 {
  text-transform: capitalize;
  line-height: 1.2;
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.-cell .-details .-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
}


.-cell .-details .-ctas a {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: unset !important;
  border-radius: 50%;
}

@media screen and (min-width: 420px) and (max-width: 576px) {}

@media screen and (max-width: 768px) {
  .-cell .-details>h5 {
    font-size: 14px !important;
  }
}
</style>