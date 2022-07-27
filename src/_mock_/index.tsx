import { InputDateProps } from '../input-date/InputDate.types'
import { InputPasswordProps } from '../input-password/InputPassword.types'
import { InputSelectProps } from '../input-select/InputSelect.types'
import { InputTextProps } from '../input-text/InputText.types'

export const mockTheme = {
  default_container: {
    background: 'lime',
    border: 'green',
    borderRadius: '4px',
    padding: '20px'
  },
  default_label: {
    color: 'white',
    fontSize: '20px'
  }
}

export const mockInputDateProps: InputDateProps = {
  label: 'Custom label',
  onChange: (newValue: string) => console.log(`New value is: ${newValue}`),
  value: '2025-12-25'
}

export const mockInputPasswordProps: InputPasswordProps = {
  label: 'Custom label',
  onChange: (newValue?: string) => console.log(`New value is: ${newValue}`),
  placeholder: 'Custom placeholder'
}

export const mockInputSelectProps: InputSelectProps = {
  label: 'Custom label',
  onChange: (newValue: string) => console.log(`New value is: ${newValue}`),
  options: [
    'Bitcoin',
    'Ethereum',
    'Bit2me'
  ]
}

export const mockInputTextProps: InputTextProps = {
  label: 'Custom label',
  onChange: (newValue: string) => console.log(`New value is: ${newValue}`),
  placeholder: 'Custom placeholder'
}
