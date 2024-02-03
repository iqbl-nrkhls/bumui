<script setup>
import '../src/components/index.scss'
import { ref } from 'vue';
import BPagination from '../src/components/pagination/BPagination.vue'

const card = {margin: '20px 0', padding: "20px", border: '1px solid #ddd', borderRadius: '5px', lineHeight: 'initial'}

const pagination = ref({ page: 10, totalPage: 12 })
</script>

# Pagination

## Component

<div :style="card">
  <BPagination v-model="pagination" />
  <div>
    <p>state: {{ pagination }}</p>
  </div>
</div>

code:

```vue
<script>
const pagination = ref({
  page: 10,
  totalPage: 12,
});
</script>

<BPagination v-model="pagination" />
```
