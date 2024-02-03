<script setup lang="ts">
import { ref } from 'vue';
import IconArrowDown from '../icon/IconArrowDown.vue';
import IconCross from '../icon/IconCross.vue';

const { modelValue, disabled } =defineProps<{
  modelValue?: { label: string, value: string | number }[],
  name?: string,
  label?: string,
  options: {
    label: string,
    value: string | number
  }[],
  validationText?: string,
  error?: boolean,
  success?: boolean,
  disabled?: boolean,
  state?: 'error' | 'success'
}>()
const emit = defineEmits(['update:modelValue'])

const active = ref(false)
const items = ref(modelValue)


const handleToggle = () => {
  !disabled && (active.value = !active.value);
}

const handleClear = () => {
  if (disabled) return null;
  items.value = []
  emit('update:modelValue', []);
  active.value = false;
}

const handleChoose = (data: {label: string, value: string | number}) => {
  let newitems: {label: string, value: string | number}[] = []
  
  if (items.value?.some(e => e.value == data.value)) {
    newitems = items.value.filter(e => e.value != data.value)
  } else {
    newitems = [...(items.value || []), data]
  }
  emit('update:modelValue', newitems)
  items.value = newitems
}
</script>

<template>
  <div
    :class="{
      'multi-select': true,
      'multi-select__error': error,
      'multi-select__success': success,
      'multi-select__active': active,
      'multi-select__disabled': disabled,
    }"
  >
    <label
      v-if="label"
      class="multi-select__label"
    >{{ label }}</label>

    <div class="multi-select__select-wrapper">
      <div class="multi-select__items">
        <span
          v-for="item in (items || [])"
          :key="item.value"
          class="multi-select__item"
        >
          {{ item.label }}
        </span>
      </div>
      <button
        class="multi-select__clear"
        @click="handleClear"
      >
        <IconCross />
      </button>
      <button
        class="multi-select__toggle"
        @click="handleToggle"
      >
        <IconArrowDown />
      </button>

      <div
        v-show="active"
        class="multi-select__select-content"
      >
        <span
          v-for="option in options"
          :key="option.value"
          :class="{
            'multi-select__select-option': true,
            'multi-select__select-option-active': items?.some(e => e.value == option.value),
          }"
          @click="handleChoose(option)"
        >
          {{ option.label }}
        </span>
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