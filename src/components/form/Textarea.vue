<script lang="ts" setup>
  import type { FormBaseProps, FormInheritStyle } from './types'

  defineOptions({ inheritAttrs: false })
  const model = defineModel<string>()
  const props = defineProps<FormBaseProps & FormInheritStyle>()

  const onInput = (e: Event) => {
    model.value = (e.target as HTMLTextAreaElement).value
  }
</script>


<template>
  <div :class="[ M.wrap, props.class ]" :style>
    <span v-if="label" :class="M.label">{{ label }}</span>
    <textarea
      v-bind="$attrs"
      @input="onInput"
      :value="model || ($attrs.value as string)"
      :class="M.textarea"
    />
  </div>
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

  .textarea {
    width: 100%;
    min-height: 5rem;
    max-height: 20rem;
    padding: .5rem;
    background: none;
    border: 1px solid #ccc;
    resize: vertical;
  }
</style>