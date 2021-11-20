import { signInValidate } from '.'

describe('validations', () => {
  it('should validate empty fields', () => {
    const values = { email: '', password: '' }

    expect(signInValidate(values)).toMatchObject({
      email: '"email" is not allowed to be empty',
      password: '"password" is not allowed to be empty'
    })
  })

  it('should return invalid email error', () => {
    const values = { email: 'test', password: 'test' }

    expect(signInValidate(values)).toMatchObject({
      email: '"email" must be a valid email'
    })
  })

  it('should success return object empty', () => {
    const values = { email: 'test@teste.com', password: 'test' }

    expect(signInValidate(values)).toMatchObject({})
  })
})
