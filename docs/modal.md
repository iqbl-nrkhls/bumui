<script setup>
import '../src/components/index.scss'
import { ref } from 'vue';
import BButton from '../src/components/button/BButton.vue'
import BModal from '../src/components/modal/BModal.vue'
import IllustrationModal from '../src/components/icon/illustrationmodal.vue';

const modal1 = ref(null)
const modal2 = ref(null)
const modal3 = ref(null)
const modal4 = ref(null)
const modal5 = ref(null)

const openModal1 = () => modal1.value?.open()
const closeModal1 = () => modal1.value?.close()

const openModal2 = () => modal2.value?.open()
const openModal3 = () => modal3.value?.open()
const openModal4 = () => modal4.value?.open()
const openModal5 = () => modal5.value?.open()
</script>

# Modal

[[toc]]

## Component

<div class="card">
  <BButton text="Open Modal" primary @click="openModal1" />
  <BModal ref="modal1" title="Woohoo!">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" primary @click="closeModal1" />
      <BButton text="Label" primary @click="closeModal1" />
    </template>
  </BModal>
</div>

code:

```vue
<script setup>
const modal = ref(null);

const openModal = () => modal1.value?.open();
const closeModal = () => modal1.value?.close();
</script>

<template>
  <BButton text="Open Modal" primary @click="openModal" />

  <BModal ref="modal1" title="Woohoo!">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" primary @click="closeModal" />
      <BButton text="Label" primary @click="closeModal" />
    </template>
  </BModal>
</template>
```

## Medium

<div class="card">
  <BButton text="Open Modal" primary @click="openModal2" />
  <BModal ref="modal2" title="Woohoo!" size="m">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" primary @click="closeModal1" />
      <BButton text="Label" primary @click="closeModal1" />
    </template>
  </BModal>
</div>

code:

```vue
<template>
  <BModal ref="modal2" title="Woohoo!" size="m">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" primary />
      <BButton text="Label" primary />
    </template>
  </BModal>
</template>
```

## Large

<div class="card">
  <BButton text="Open Modal" primary @click="openModal3" />
  <BModal ref="modal3" title="Woohoo!" size="l">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" />
      <BButton text="Label" primary />
    </template>
  </BModal>
</div>

code:

```vue
<template>
  <BModal ref="modal3" title="Woohoo!" size="l">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" />
      <BButton text="Label" primary />
    </template>
  </BModal>
</template>
```

## PWA

<div class="card">
  <BButton text="Open Modal" primary @click="openModal4" />
  <BModal ref="modal4" title="Woohoo!" size="pwa">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" primary class="w-full" />
      <BButton text="Label" primary class="w-full" />
    </template>
  </BModal>
</div>

code:

```vue
<template>
  <BModal ref="modal4" title="Woohoo!" size="pwa">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action>
      <BButton text="Close" primary class="w-full" />
      <BButton text="Label" primary class="w-full" />
    </template>
  </BModal>
</template>
```

## PWA V2

<div class="card">
  <BButton text="Open Modal" primary @click="openModal5" />
  <BModal ref="modal5" title="Woohoo!" size="pwa">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action-vertical>
      <BButton text="Close" primary class="w-full" />
      <BButton text="Label" primary class="w-full" />
    </template>
  </BModal>
</div>

code:

```vue
<template>
  <BModal ref="modal5" title="Woohoo!" size="pwa">
    <template #illustration>
      <IllustrationModal />
    </template>
    <p>... is successfully ...</p>
    <template #action-vertical>
      <BButton text="Close" primary class="w-full" />
      <BButton text="Label" primary class="w-full" />
    </template>
  </BModal>
</template>
```

<style>
  .card {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    line-height: normal;
  }

  .card p {
    margin: 0
  }
  .card * {
    line-height: normal;
  }

  .w-full {
    width: 100%;
  }
</style>
