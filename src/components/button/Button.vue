<script setup lang="ts">
import '../index.css'
defineProps<{ text: string }>();
</script>

<template>
  <button class="bg-red-500">{{ text }}</button>
</template>