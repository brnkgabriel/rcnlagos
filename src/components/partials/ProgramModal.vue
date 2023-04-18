<template>
  <TransitionRoot appear :show="isOpen" as="template" :key="Date.now()">
    <Dialog as="div" @close="closeModal" class="-dialog">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0-transition-child-div" />
      </TransitionChild>

      <div class="-modal">
        <div class="-modal-inner-div">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="-dialog-panel">
              <DialogTitle as="h3" class="-dialog-title">
                {{ program.title }}
              </DialogTitle>
              <div class="-dialog-content">
                <iframe :src="src" class="-video"></iframe>
              </div>

              <div class="-footer">
                <p>{{ program.minister }}</p>
                <button type="button" class="-close-btn" @click="closeModal">
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { iProgram } from '~~/src/types';
const props = defineProps<{
  program: iProgram;
}>()

const src = ref(youTubeLinkToEmbedLink(props.program.videourl as string))

watch(() => props.program, () => {
  src.value = youTubeLinkToEmbedLink(props.program.videourl as string)
})

const isOpen = ref(false)
function closeModal() {
  isOpen.value = false
  src.value = ""
}
function openModal() {
  isOpen.value = true
  src.value = youTubeLinkToEmbedLink(props.program.videourl as string)
}

defineExpose({
  openModal
})
</script>
<style scoped>

.-dialog {
  z-index: 1;
  position: relative;
}

.-transition-child-div {
  background-color: rgba(0,0,0,.25);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.-modal {
  position: fixed;
  overflow-y: auto;
  font-family: Poppins;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,.25);
}
.-modal-inner-div {
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
}

.-dialog-panel {
  width: 100%;
  max-width: 45rem;
  overflow: hidden;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  text-align: left;
  vertical-align: middle;
  box-shadow: var(--box-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.-dialog-title {
  font-size: 1.125rem/* 18px */;
  line-height: 1.75rem/* 28px */;
  font-weight: 500;
  line-height: 1.5rem/* 24px */;
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.-dialog-content {
  margin-top: 8px;
}
.-video {
  aspect-ratio: 560 / 315;
  max-height: 315px;
  width: 100%;
  border-radius: 4px;
}

.-footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.-close-btn {
  display: inline-flex;
  justify-content: center;
  border-radius: 6px;
  border-width: 1px;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
  padding: 0.5rem 1rem;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  font-weight: bold;
  color: var(--rcntext);
}

.-close-btn:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}

.-close-btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.-close-btn:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
  --tw-ring-offset-width: 2px;
}
</style>