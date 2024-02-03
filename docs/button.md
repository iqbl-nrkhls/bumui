<script setup>
import '../src/components/index.scss'
import BButton from '../src/components/button/BButton.vue'

const card = {margin: '20px 0', padding: "20px", border: '1px solid #ddd', borderRadius: '5px', lineHeight: 'initial'}
</script>

# Button

[[toc]]

## Primary

<div :style="card">
  <BButton text="Button" primary />
</div>

code:

```vue
<BButton text="Button" primary />
```

## Secondary

<div :style="card">
  <BButton text="Button" />
</div>

code:

```vue
<BButton text="Button" primary />
```

## Tertiary

<div :style="card">
  <BButton text="Button" tertiary />
</div>

code:

```vue
<BButton text="Button" tertiary />
```

## Textline

<div :style="card">
  <BButton text="Button" textline />
</div>

code:

```vue
<BButton text="Button" textline />
```

## Icon Left

<div :style="card">
  <BButton text="Button" primary>
    <template #iconL>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.99999 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00008C13.3333 5.05456 10.9455 2.66675 7.99999 2.66675C5.05447 2.66675 2.66666 5.05456 2.66666 8.00008C2.66666 10.9456 5.05447 13.3334 7.99999 13.3334Z"
          fill="white"
        />
      </svg>
    </template>
  </BButton>
</div>

code:

```vue
<BButton text="Button" primary>
  <template #iconL>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99999 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00008C13.3333 5.05456 10.9455 2.66675 7.99999 2.66675C5.05447 2.66675 2.66666 5.05456 2.66666 8.00008C2.66666 10.9456 5.05447 13.3334 7.99999 13.3334Z"
        fill="white"
      />
    </svg>
  </template>
</BButton>
```

## Icon Right

<div :style="card">
  <BButton text="Button" primary>
    <template #iconR>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.99999 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00008C13.3333 5.05456 10.9455 2.66675 7.99999 2.66675C5.05447 2.66675 2.66666 5.05456 2.66666 8.00008C2.66666 10.9456 5.05447 13.3334 7.99999 13.3334Z"
          fill="white"
        />
      </svg>
    </template>
  </BButton>
</div>

code:

```vue
<BButton text="Button" primary>
  <template #iconR>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99999 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00008C13.3333 5.05456 10.9455 2.66675 7.99999 2.66675C5.05447 2.66675 2.66666 5.05456 2.66666 8.00008C2.66666 10.9456 5.05447 13.3334 7.99999 13.3334Z"
        fill="white"
      />
    </svg>
  </template>
</BButton>
```

## Icon Only

<div :style="card">
  <BButton primary>
    <template #iconL>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.99999 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00008C13.3333 5.05456 10.9455 2.66675 7.99999 2.66675C5.05447 2.66675 2.66666 5.05456 2.66666 8.00008C2.66666 10.9456 5.05447 13.3334 7.99999 13.3334Z"
          fill="white"
        />
      </svg>
    </template>
  </BButton>
</div>

code:

```vue
<BButton primary>
  <template #iconL>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99999 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00008C13.3333 5.05456 10.9455 2.66675 7.99999 2.66675C5.05447 2.66675 2.66666 5.05456 2.66666 8.00008C2.66666 10.9456 5.05447 13.3334 7.99999 13.3334Z"
        fill="white"
      />
    </svg>
  </template>
</BButton>
```

## Disabled

<div :style="card">
  <BButton text="Button" primary disabled />
</div>

code:

```vue
<BButton text="Button" primary disabled />
```
