<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-1">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto font-body">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-[45rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                {{ program.title }}
              </DialogTitle>
              <div class="mt-2">
                <iframe :src="src" class="-video"></iframe>
              </div>

              <div class="mt-4 -footer">
                <p>{{ program.minister }}</p>
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal">
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
}

defineExpose({
  isOpen
})
</script>
<style scoped>
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
}
</style>