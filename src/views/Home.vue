<script lang="ts" setup>
  import type { FormGeneratorItem, FormGeneratorButton } from '@/components/form/types'
  import UiFormGenerator from '@/components/form/Generator.vue'
  import { ref } from 'vue'

  const initialModel = () => ({
    login: '',
    password: '',
    checkbox_1: false,
    checkbox_2: true,
    select: 'no select',
    about: ''
  })

  const model = ref(initialModel())

  const items: FormGeneratorItem[] = [
    {
      type: 'input',
      label: 'Login',
      attrs: {
        name: 'login',
        placeholder: 'Placeholder'
      }
    },
    {
      type: 'input',
      label: 'Password',
      attrs: {
        name: 'password',
        type: 'password'
      }
    },
    {
      type: 'checkbox',
      label: 'Checkbox 1',
      attrs: { name: 'checkbox_1' }
    },
    {
      type: 'checkbox',
      label: 'Checkbox 2',
      attrs: { name: 'checkbox_2' }
    },
    {
      type: 'select',
      attrs: { name: 'select' },
      options: [
        {
          label: 'Select',
          value: 'no select'
        },
        {
          label: 'Option 1',
          value: 'option 1'
        },
        {
          label: 'Option 2',
          value: 'option 2'
        }
      ]
    },
    {
      type: 'textarea',
      label: 'About',
      attrs: {
        name: 'about',
        placeholder: 'Description'
      }
    },
    {
      type: 'button',
      label: 'Save',
      attrs: {
        name: 'save',
        type: 'button'
      }
    },
    {
      type: 'button',
      label: 'Clear',
      attrs: {
        name: 'clear',
        type: 'reset'
      }
    }
  ]

  const onButton = (item: FormGeneratorButton) => {
    if (item.attrs?.name == 'save') {
      alert('Saved!')
    }

    if (item.attrs?.name == 'clear') {
      alert('Cleared!')
    }
  }
</script>


<template>
  <main>
    <UiFormGenerator
      v-model="model"
      @reset="model = initialModel()"
      @click:button="onButton" :items
    />
    
    <ul style="margin-top: 2rem">
      <span>v-model</span>
      <li v-for="val, key in model"><b>{{ key }}</b>: {{ val }}</li>
    </ul>
  </main>
</template>