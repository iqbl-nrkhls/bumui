<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BButton from '../components/button/BButton.vue';
import BPagination from '../components/pagination/BPagination.vue';
import BMultiSelect from '../components/multiSelect/BMultiSelect.vue';
import BModal from '../components/modal/BModal.vue';
import IllustrationModal from '../components/icon/IllustrationModal.vue';


const pagination = ref({ page: 4, totalPage: 15 })
const inputRadio = ref(2)

const multiSelect = ref([
  { label: 'LabelA', value: 1 },
  { label: 'LabelB', value: 2 },
  { label: 'Labelc', value: 3 },
])

const options = [
  { label: 'Pilihan 1', value: 1},
  { label: 'Pilihan 2', value: 2},
  { label: 'Pilihan 3', value: 3},
  { label: 'Pilihan 4', value: 4},
]

const modal = ref<{ open: () => void }>()

const showModal = () => modal.value?.open()

</script>

<template>
  <h1 class="text-4xl">
    BumUI
  </h1>
  <p>BUMA UI Library</p>

  <!-- <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
    <input
      id="radioDefault01"
      class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
      type="radio"
      name="flexRadioDefault"
    >
    <label
      class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
      for="radioDefault01"
    >
      Default radio
    </label>
  </div> -->

  <BModal
    ref="modal"
    title="Woohoo!"
    size="m"
  >
    <template #illustration>
      <IllustrationModal />
    </template>
    testa
  </BModal>

  <br>
  <br>
  <br>
  <br>
  <br>
  <BMultiSelect
    v-model="multiSelect"
    label="Pilihan"
    validation-text="Validation Text"
    :options="options"
  />
  <BPagination
    v-model="pagination"
    label="Display Grid"
  />

  <BButton
    text="text"
    @click="showModal"
  />
  <!-- <BButton
    text="text"
    textline
  />
  <BButton
    text="text"
    primary
    outline
  />
  <BButton
    text="text"
    primary
    disabled
  >
    <template #iconL>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99999 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00008C13.3333 5.05456 10.9455 2.66675 7.99999 2.66675C5.05447 2.66675 2.66666 5.05456 2.66666 8.00008C2.66666 10.9456 5.05447 13.3334 7.99999 13.3334Z"
          fill="white"
        />
      </svg>
    </template>
  </BButton> -->
</template>
