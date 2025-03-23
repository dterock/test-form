<script lang="ts" setup>
  import type { FormSelectProps } from './types'

  const model = defineModel<string>()
  defineProps<FormSelectProps>()

  const onChange = (e: Event) => {
    model.value = (e.target as HTMLSelectElement).value
  }
</script>


<template>
  <select @change="onChange" :value="model" :class="M.select">
    <option v-for="opt, i in options" v-bind="opt" />
  </select>
</template>


<style module="M">
  .select {
    height: 2rem;
    width: 100%;
    padding: 0 .5rem;
    background: none;
    border: 1px solid #ccc;
  }
</style>