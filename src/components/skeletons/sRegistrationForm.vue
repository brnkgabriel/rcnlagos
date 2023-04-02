<template>
  <form class="-registration-form">
    <div class="-field -programs"></div>
    <div class="-field -name"></div>
    <div class="-field -email"></div>
    <div class="-field -phoneNumber"></div>
    <div class="-field -joiningFrom"></div>
    <div class="-field -needAccommodation"></div>
    <div class="-field -firstTimer"></div>
    <div class="-field -submit"></div>
  </form>
</template>
<script setup lang="ts">

</script>
<style scoped>
.-field {
  background-color: var(--rcnlightbg);
  height: 40px;
}

.-registration-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-field {
  width: 100%
}


@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-registration-form {
    grid-template-columns: repeat(1, 1fr)
  }
  
  .-programs {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-template-columns: repeat(1, 1fr);
  }

}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>