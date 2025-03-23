import type { ButtonHTMLAttributes, InputHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, StyleValue } from 'vue'

export type FormGeneratorItem = FormGeneratorInput | FormGeneratorSelect | FormGeneratorCheckbox | FormGeneratorTextarea | FormGeneratorButton

export interface FormGeneratorProps {
  items: FormGeneratorItem[]
}

export interface FormGeneratorInput extends FormBaseProps, FormInheritStyle {
  type: 'input'
  attrs?: InputHTMLAttributes
}

export interface FormGeneratorSelect extends FormSelectProps {
  type: 'select'
  attrs?: SelectHTMLAttributes
}

export interface FormGeneratorCheckbox extends FormBaseProps, FormInheritStyle {
  type: 'checkbox'
  attrs?: InputHTMLAttributes
}

export interface FormGeneratorTextarea extends FormBaseProps, FormInheritStyle {
  type: 'textarea'
  attrs?: TextareaHTMLAttributes
}

export interface FormGeneratorButton extends FormBaseProps {
  type: 'button'
  attrs?: ButtonHTMLAttributes
}


export interface FormBaseProps {
  label?: string
}

export interface FormSelectProps {
  options: OptionHTMLAttributes[]
}

export interface FormInheritStyle {
  class?: string | string[]
  style?: StyleValue
}


export interface FormGeneratorEmits {
  'click:button': [item: FormGeneratorButton]
}