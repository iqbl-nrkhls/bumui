<script setup lang="ts">
const { returnObject } = defineProps<{
  modelValue?: { label: string, value: string | number } |string | number,
  name?: string,
  label?: string,
  options: {
    label: string,
    value: string | number
  }[],
  validationText?: string,
  returnObject?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const handleChange = (data: { label: string, value: string | number}) => {
  emit('update:modelValue', returnObject ? data : data?.value)
}

</script>

<template>
  <div class="input-radio">
    <label
      v-if="label"
      class="input-radio__label"
    >{{ label }}</label>
    <div class="input-radio__item-wrapper">
      <label
        v-for="option in options"
        :key="option.value"
        class="input-radio__item"
      >
        <input
          class="input-radio__item-input"
          type="radio"
          :value="option.value"
          :name="name"
          :checked="returnObject ? typeof modelValue == 'object' && modelValue?.value == option.value : modelValue == option.value"
          @input="handleChange(option)"
        >
        <span
          class="input-radio__item-label"
        >
          {{ option.label }}
        </span>
      </label>
    </div>
    <p
      v-if="validationText"
      class="input-radio__validation"
    >
      {{ validationText }}
    </p>
  </div>
</template>