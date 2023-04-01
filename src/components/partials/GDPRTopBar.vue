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
      message: "We use cookies to improve your experience on our site.",
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
</style>
