<script setup lang="ts">
import { ref, useSlots } from 'vue';
import IconClose from '../icon/IconClose.vue';

defineProps<{
  title?: string,
  hideClose?: boolean,
  size?: 's' | 'm' | 'l' | 'pwa'
}>()

const slot = useSlots()
const dialog = ref<any>(null)

const open = () => dialog.value?.showModal()
const close = () => dialog.value?.close()

defineExpose({
  open, close
})
</script>

<template>
  <dialog
    ref="dialog"
    :class="{
      'modal': true,
      'modal__m': size == 'm',
      'modal__l': size == 'l',
      'modal__pwa': size == 'pwa'
    }"
  >
    <div class="modal__box">
      <slot name="illustration" />
      <h1
        v-if="title"
        class="modal__heading"
      >
        {{ title }}
      </h1>
      <slot />
      <div
        v-if="slot.action"
        class="modal__action"
      >
        <slot name="action" />
      </div>

      <slot name="action-vertical" />
      <button
        v-if="!hideClose"
        class="modal__close"
        @click="close"
      >
        <IconClose />
      </button>
    </div>
  </dialog>
</template>