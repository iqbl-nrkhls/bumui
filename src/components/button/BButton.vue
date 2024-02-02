<script setup lang="ts">
defineProps<{ text?: string, primary?: boolean, tertiary?: boolean, outline?: boolean, textline?: boolean, disabled?: boolean }>();
</script>
  
<template>
  <button
    :class="{ 'btn': true, 'btn--primary': primary, 'btn--tertiary': tertiary, 'btn--textline': textline }"
    :disabled="disabled"
  >
    <slot name="iconL" />
    {{ text }}
    <slot name="iconR" />
  </button>
</template>