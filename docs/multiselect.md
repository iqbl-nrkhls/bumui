<script setup>
import '../src/components/index.scss'
import './style.css'
import { ref } from 'vue';
import BMultiSelect from '../src/components/multiSelect/BMultiSelect.vue'

const multiSelect = ref([
  { label: 'Pilihan 1', value: 1},
  { label: 'Pilihan 2', value: 2},
])

const options = [
  { label: 'Pilihan 1', value: 1},
  { label: 'Pilihan 2', value: 2},
  { label: 'Pilihan 3', value: 3},
  { label: 'Pilihan 4', value: 4},
]
</script>

# Multi Select

[[toc]]

## Component

<div class="card" style="height: 400px">
  <BMultiSelect
    v-model="multiSelect"
    label="Pilihan"
    validation-text="Validation Text"
    :options="options"
  />
  <div>
    <p>state: {{ multiSelect }}</p>
  </div>
</div>

code:

```vue
<script>
const multiSelect = ref([
  { label: "Pilihan 1", value: 1 },
  { label: "Pilihan 2", value: 2 },
]);

const options = [
  { label: "Pilihan 1", value: 1 },
  { label: "Pilihan 2", value: 2 },
  { label: "Pilihan 3", value: 3 },
  { label: "Pilihan 4", value: 4 },
];
</script>

<BMultiSelect
  v-model="multiSelect"
  label="Pilihan"
  validation-text="Validation Text"
  :options="options"
/>
```

## Correct / Success

<div class="card" style="height: 400px">
  <BMultiSelect
    v-model="multiSelect"
    label="Pilihan"
    validation-text="Validation Text"
    :options="options"
    :success="multiSelect.length"
  />
</div>

code:

```vue
<BMultiSelect
  v-model="multiSelect"
  label="Pilihan"
  validation-text="Validation Text"
  :options="options"
  :success="multiSelect.length"
/>
```

## Error

<div class="card" style="height: 400px">
  <BMultiSelect
    v-model="multiSelect"
    label="Pilihan"
    validation-text="Validation Text"
    :options="options"
    :error="multiSelect.length < 3"
  />
</div>

code:

```vue
<BMultiSelect
  v-model="multiSelect"
  label="Pilihan"
  validation-text="Validation Text"
  :options="options"
  :error="multiSelect.length < 3"
/>
```

## Disabled

<div class="card" style="height: 400px">
  <BMultiSelect
    v-model="multiSelect"
    label="Pilihan"
    validation-text="Validation Text"
    :options="options"
    disabled
  />
</div>

code:

```vue
<BMultiSelect
  v-model="multiSelect"
  label="Pilihan"
  validation-text="Validation Text"
  :options="options"
  disabled
/>
```
