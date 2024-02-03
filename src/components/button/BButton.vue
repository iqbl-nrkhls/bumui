<script setup lang="ts">
defineProps<{ text?: string, primary?: boolean, tertiary?: boolean, outline?: boolean, textline?: boolean, disabled?: boolean }>();
</script>
  
<template>
  <button
    :class="{ 'btn': true, [outline ? 'btn__primary-outline' :'btn__primary']: primary, 'btn__tertiary': tertiary, 'btn__textline': textline }"
    :disabled="disabled"
  >
    <slot name="iconL" />
    {{ text }}
    <slot name="iconR" />
  </button>
</template>