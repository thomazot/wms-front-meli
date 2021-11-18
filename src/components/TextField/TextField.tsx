import { useState, InputHTMLAttributes } from 'react'

import * as S from './TextField.styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  name,
  onInputChange,
  initialValue = '',
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value

    setValue(currentValue)

    !!onInputChange && onInputChange(currentValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          onChange={handleChange}
          value={value}
          name={name}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default TextField
