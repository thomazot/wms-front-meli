import Joi from 'joi'

const fieldsValidations = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required()
}

function getFieldErros(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((detail) => {
      errors[detail.path.join('.')] = detail.message
    })
  }

  return errors
}

export type FieldErrors = {
  [key: string]: string
}

export type SiginInValues = {
  email: string
  password: string
}

export function signInValidate(values: SiginInValues): FieldErrors {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErros(schema.validate(values, { abortEarly: false }))
}
