<script setup>
import '../src/components/index.scss'
import './style.css'
import { ref } from 'vue';
import BPagination from '../src/components/pagination/BPagination.vue'

const pagination = ref({ page: 10, totalPage: 12 })
</script>

# Pagination

## Component

<div class="card">
  <BPagination v-model="pagination" label="Display Grid" />
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

<BPagination v-model="pagination" label="Display Grid" />
```
