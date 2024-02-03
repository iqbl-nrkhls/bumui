<script setup lang="ts">
import IconArrowLeft from '../icon/IconArrowLeft.vue'
import IconArrowRight from '../icon/IconArrowRight.vue'
import { ref, computed } from 'vue';

const props = defineProps<{ modelValue?: { page: number, totalPage: number }}>()
const emit = defineEmits(['update:modelValue'])


const page = ref(props.modelValue?.page || 1)
const totalPage = props.modelValue?.totalPage || 1

const items = computed(() => [...Array(totalPage)].map((_, i) => ({
    value: i + 1,
    label: i + 1,
  })));

const firstItems = computed(() => items.value.slice(
  0,
  page.value < 3 || totalPage - page.value < 2 ? 3 : page.value > 3 ? 2 : page.value + 1
));

const lastItems = computed(() => items.value.slice(
  -(totalPage - page.value < 2 || page.value < 3
    ? 3
    : totalPage - page.value > 2
    ? 2
    : totalPage - page.value + 2)
));

const midItems =
  computed(() => page.value > 4 && totalPage - page.value >= 4
    ? [null, ...items.value.slice(page.value - 2, page.value + 1), null]
    : totalPage - page.value > 2 && page.value > 4
    ? [null, ...items.value.slice(page.value - 2, totalPage - 2)]
    : page.value > 3 && totalPage - page.value > 2
    ? [...items.value.slice(2, page.value + 1), null]
    : [null]);


const handleChange = (data) => {
  if (data && data.value != page.value) {
    page.value = data.value
    emit('update:modelValue', { page: data.value, totalPage })
  }
}
const handleInputChange = (e) => {
  const value = e.target.value
  if (value != page.value && value <= totalPage && value > 0) {
    page.value = Number(value)
    emit('update:modelValue', { page: Number(value), totalPage })
  }
}

</script>
  
<template>
  <div class="pagination">
    <!-- Input Number -->
    <div class="pagination__input">
      <label class="pagination__input-label">Display Grid</label>
      <div class="pagination__input-element">
        <input
          type="number"
          min="1"
          :max="totalPage"
          :value="page"
          @change="handleInputChange"
        >
        <!-- <div class="pagination--input-spiner">
        </div> -->
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination__select">
      <button
        :class="{'pagination__select-item': true}"
        @click="handleChange(page <= 1 ? null : { value: page - 1})"
      >
        <IconArrowLeft />
      </button>
      <template v-if="totalPage > 8">
        <button
          v-for="(e,i) in [...firstItems, ...midItems, ...lastItems]"
          :key="i"
          :class="{
            'pagination__select-item': true,
            'pagination__select-disable': !e,
            'pagination__select-active': e?.value == page,
          }"
          @click="handleChange(e)"
        >
          {{ e?.label ?? '...' }}
        </button>
      </template>
      <template v-else>
        <button
          v-for="(e,i) in items"
          :key="i"
          :class="{
            'pagination__select-item': true,
            'pagination__select-active': e?.value == page,
          }"
          @click="handleChange(e)"
        >
          {{ e?.label }}
        </button>
      </template>
      <button
        :class="{'pagination__select-item': true}"
        @click="handleChange(page >= totalPage ? null : { value: page + 1})"
      >
        <IconArrowRight />
      </button>
    </div>
  </div>
</template>