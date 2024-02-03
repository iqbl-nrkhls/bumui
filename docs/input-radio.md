<script setup>
import '../src/components/index.scss'
import { ref } from 'vue';
import BInputRadio from '../src/components/inputRadio/BInputRadio.vue'

const inputRadio = ref(1)
const inputRadioObject = ref({ "label": "Pilihan 1", "value": 1 })

const radioOptions = [
  { label: 'Pilihan 1', value: 1},
  { label: 'Pilihan 2', value: 2},
  { label: 'Pilihan 3', value: 3},
  { label: 'Pilihan 4', value: 4},
  { label: 'Pilihan 5', value: 5},
  { label: 'Pilihan 6', value: 6},
]
</script>

# Input Radio

[[toc]]

## Component

<div class="card">
  <div style="width: 402px; margin: 0 auto;">
    <BInputRadio v-model="inputRadio" label="Pilihan" validation-text="Validation Text" :options="radioOptions" />
  </div>
  <div>
    <p>state: {{ inputRadio }}</p>
  </div>
</div>

code:

```vue
<script>
const inputRadio = ref(1);

const radioOptions = [
  { label: "Pilihan 1", value: 1 },
  { label: "Pilihan 2", value: 2 },
  { label: "Pilihan 3", value: 3 },
  { label: "Pilihan 4", value: 4 },
  { label: "Pilihan 5", value: 5 },
  { label: "Pilihan 6", value: 6 },
];
</script>

<BInputRadio
  v-model="inputRadio"
  label="Pilihan"
  validation-text="Validation Text"
  :options="radioOptions"
/>
```

## Split 4

<div class="card">
  <div style="width: 402px; margin: 0 auto;">
    <BInputRadio v-model="inputRadio" label="Pilihan" validation-text="Validation Text" :options="radioOptions.slice(0,4)" />
  </div>
  <div>
    <p>state: {{ inputRadio }}</p>
  </div>
</div>

## Split 5

<div class="card">
  <div style="width: 402px; margin: 0 auto;">
    <BInputRadio v-model="inputRadio" label="Pilihan" validation-text="Validation Text" :options="radioOptions.slice(0,5)" />
  </div>
  <div>
    <p>state: {{ inputRadio }}</p>
  </div>
</div>


## Horizontal 4

<div class="card">
  <div style="width: 1256px; margin: 0 auto;">
    <BInputRadio v-model="inputRadio" label="Pilihan" validation-text="Validation Text" :options="radioOptions.slice(0,4)" />
  </div>
  <div>
    <p>state: {{ inputRadio }}</p>
  </div>
</div>

## Horizontal 5

<div class="card">
  <div style="width: 1256px; margin: 0 auto;">
    <BInputRadio v-model="inputRadio" label="Pilihan" validation-text="Validation Text" :options="radioOptions.slice(0,5)" />
  </div>
  <div>
    <p>state: {{ inputRadio }}</p>
  </div>
</div>

## Return Object

<div class="card">
  <div style="width: 402px; margin: 0 auto;">
    <BInputRadio v-model="inputRadioObject" label="Pilihan" validation-text="Validation Text" :options="radioOptions" return-object />
  </div>
  <div>
    <p>state: {{ inputRadioObject }}</p>
  </div>
</div>

code:

```vue
<script>
const inputRadioObject = ref(1);

const radioOptions = [
  { label: "Pilihan 1", value: 1 },
  { label: "Pilihan 2", value: 2 },
  { label: "Pilihan 3", value: 3 },
  { label: "Pilihan 4", value: 4 },
  { label: "Pilihan 5", value: 5 },
  { label: "Pilihan 6", value: 6 },
];
</script>

<BInputRadio
  v-model="inputRadio"
  label="Pilihan"
  validation-text="Validation Text"
  :options="radioOptions"
  return-object
/>
```

<style>
  .card {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    line-height: normal;
    overflow: scroll;
  }

  .card p {
    margin: 0
  }
  .card * {
    line-height: normal;
  }
</style>
