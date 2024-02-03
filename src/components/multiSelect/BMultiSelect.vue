<script setup lang="ts">
import { ref } from 'vue';
import IconArrowDown from '../icon/IconArrowDown.vue';
import IconCross from '../icon/IconCross.vue';

defineProps<{
  modelValue?: { label: string, value: string | number }[],
  name?: string,
  label?: string,
  options: {
    label: string,
    value: string | number
  }[],
  validationText?: string,
  state?: 'error' | 'success'
}>()
const emit = defineEmits(['update:modelValue'])

const active = ref(false)


const items = [
  { label: 'LabelA', value: 1 },
  { label: 'LabelB', value: 2 },
  { label: 'Labelc', value: 3 },
]
</script>

<template>
  <div class="multi-select">
    <label
      v-if="label"
      class="multi-select__label"
    >{{ label }}</label>

    <div class="multi-select__select-wrapper">
      <div class="multi-select__items">
        <span
          v-for="item in items"
          :key="item.value"
          class="multi-select__item"
        >
          {{ item.label }}
        </span>
      </div>
      <button class="multi-select__clear">
        <IconCross />
      </button>
      <button
        class="multi-select__toggle"
        @click="active = !active"
      >
        <IconArrowDown />
      </button>

      <div
        v-show="active"
        class="multi-select__select-content"
      >
        test
      </div>
    </div>

    <p
      v-if="validationText"
      class="multi-select__validation"
    >
      {{ validationText }}
    </p>
  </div>
</template>