<script lang="ts" setup>
  import type { FormBaseProps } from './types'
  defineProps<FormBaseProps>()
</script>


<template>
  <button :class="M.button">
    {{ label }}
  </button>
</template>


<style module="M">
  .button {
    border: 0;
    width: min-content;
    padding: .5rem 1rem;
    cursor: pointer;
  }
</style>