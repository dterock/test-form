<script lang="ts" setup>
  import type { FormBaseProps, FormInheritStyle } from './types'

  defineOptions({ inheritAttrs: false })
  const model = defineModel<boolean>()
  const props = defineProps<FormBaseProps & FormInheritStyle>()

  const onChange = (e: Event) => {
    model.value = (e.target as HTMLInputElement).checked
  }
</script>


<template>
  <label :class="[ M.wrap, props.class ]" :style>
    <input v-bind="$attrs" @change="onChange" :checked="model" :class="M.input" type="checkbox">
    <span v-if="label">{{ label }}</span>
  </label>
</template>


<style module="M">
  .wrap {
    display: inline-flex;
    align-items: center;
    gap: .3rem;
    user-select: none;
  }

  .input {
    border: 0;
  }
</style>