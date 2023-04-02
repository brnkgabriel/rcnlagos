<template>
  <div class="gdpr-top-bar">
    <p>{{ message }}</p>
    <NuxtLink :href="privacyPolicyLink">{{ privacyPolicyText }}</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "We use cookies to improve our site experience.",
      privacyPolicyText: "Privacy Policy",
      privacyPolicyLink: "/privacy"
    };
  }
};
</script>

<style>
.gdpr-top-bar {
  background-color: var(--rcnlightbg);
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
}

.gdpr-top-bar a {
  color: #007bff;
}


@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {
  .gdpr-top-bar {
    flex-direction: column;
    column-gap: unset;
    row-gap: 4px;
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>
