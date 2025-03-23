<script lang="ts" setup>
  import type { FormBaseProps, FormInheritStyle } from './types'

  defineOptions({ inheritAttrs: false })
  const model = defineModel<string>()
  const props = defineProps<FormBaseProps & FormInheritStyle>()

  const onInput = (e: Event) => {
    model.value = (e.target as HTMLInputElement).value
  }
</script>


<template>
  <label :class="[ M.wrap, props.class ]" :style="props.style">
    <span v-if="label" :class="M.label">{{ label }}</span>
    <input
      v-bind="$attrs"
      @input="onInput"
      :class="M.input"
      :value="model || ($attrs.value as string)"
    >
  </label>
</template>


<style module="M">
  .wrap {
    display: flex;
    flex-direction: column;
    display: block;
  }

  .label {
    font-size: .8rem;
    opacity: .8;
  }

  .input {
    height: 2rem;
    width: 100%;
    padding: 0 .5rem;
    background: none;
    border: 1px solid #ccc;
  }
</style>