<script setup>
import '../src/components/index.scss'
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
</style>
