<script setup lang="ts">
import { ref } from 'vue';
import BButton from '../components/button/BButton.vue';
import BPagination from '../components/pagination/BPagination.vue';


const pagination = ref({ page: 4, totalPage: 15 })
</script>

<template>
  <h1 class="text-4xl">
    BumUI
  </h1>
  <p>BUMA UI Library</p>

  <h2 class="text-2xl">
    Button
  </h2>

  <BPagination
    v-model="pagination"
    label="Display Grid"
  />
  {{ pagination }}
  <br>
  <br>
  <br>
  <br>
  <br>
  <BButton text="text" />
  <BButton
    text="text"
    textline
  />
  <BButton
    text="text"
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
  </BButton>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
