<script lang="ts" setup>
  import type { FormGeneratorItem } from '@/components/form/types'
  import UiFormGenerator from '@/components/form/Generator.vue'
  import UiInput from '@/components/form/InputText.vue'
  import { ref } from 'vue'

  const color = ref('none')

  const items: FormGeneratorItem[] = [
    {
      type: 'input',
      label: 'Customize'
    },
    {
      type: 'input',
      label: 'No customize'
    },
    {
      type: 'button',
      label: 'Random theme',
      attrs: { type: 'button' }
    }
  ]

  function random(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }

  const onClick = () => {
    color.value = `oklch(${random(0, 100)}% ${random(1, 4) / 10} ${random(0, 360)}deg / .3)`
  }
</script>


<template>
  <main>
    <UiFormGenerator @click:button="onClick" :items>
      <template #0="props">
        <UiInput v-bind="props" :class="M.theme" :style="{ '--color': color }" />
      </template>
    </UiFormGenerator>
  </main>
</template>


<style module="M">
  .theme input {
    background: var(--color);
    transition: background-color .3s;
  }
</style>