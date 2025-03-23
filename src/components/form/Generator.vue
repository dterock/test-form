<script lang="ts" setup>
  import type { FormGeneratorEmits, FormGeneratorProps, FormGeneratorButton } from './types.ts'
  import UiInput from './InputText.vue'
  import UiCheckbox from './Checkbox.vue'
  import UiTextarea from './Textarea.vue'
  import UiButton from './Button.vue'
  import UiSelect from './Select.vue'
  
  const model = defineModel<Record<string, any>>({default: {}})
  defineProps<FormGeneratorProps>()
  defineEmits<FormGeneratorEmits>()
</script>


<template>
  <form :class="M.form">
    <template v-for="item, idx in items">
      <slot v-if="item.type == 'select'" v-bind="item" :name="item.type">
        <UiSelect
          v-bind="item.attrs"
          v-model="model[item.attrs?.name || '']"
          :options="item.options"
        />
      </slot>

      <slot v-else-if="item.type == 'button'" v-bind="item" :name="item.type">
        <UiButton
          v-model="model[item.attrs?.name || '']"
          v-bind="item.attrs"
          @click="$emit('click:button', item)"
          :label="item.label"
        />
      </slot>

      <slot v-else-if="item.type == 'textarea'" v-bind="item" :name="item.type">
        <UiTextarea
          v-bind="item.attrs"
          v-model="model[item.attrs?.name || '']"
          :label="item.label"
        />
      </slot>

      <slot v-else-if="item.type == 'checkbox'" v-bind="item" :name="item.type">
        <UiCheckbox
          v-bind="item.attrs"
          v-model="model[item.attrs?.name || '']"
          :label="item.label"
        />
      </slot>

      <slot v-else v-bind="item" :name="idx">
        <UiInput
          v-bind="item.attrs"
          v-model="model[item.attrs?.name || '']"
          :type="item.attrs?.type || item.type"
          :label="item.label"
        />
      </slot>
    </template>
  </form>
</template>


<style module="M">
  .form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
</style>