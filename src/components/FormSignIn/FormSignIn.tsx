import { useState } from 'react'
import Router from 'next/router'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErrors, signInValidate } from 'utils/validations'
import { FormWrapper } from 'styles/form'

export type FormSignInProps = {
  onSubmit?: () => void
}

const FormSignIn = ({ onSubmit }: FormSignInProps) => {
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInputs = (field: string, value: string) =>
    setInputs((inputsOld) => ({ ...inputsOld, [field]: value }))

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const errors = signInValidate(inputs)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    setFieldError({})

    if (onSubmit) {
      onSubmit()
    }

    Router.push('/home')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="E-Mail"
          type="email"
          error={fieldError?.email}
          onInputChange={handleInputs}
        />
        <TextField
          name="password"
          placeholder="Password"
          error={fieldError?.password}
          type="password"
          onInputChange={handleInputs}
        />

        <Button type="submit" size="large" fullWidth>
          Sign in
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
