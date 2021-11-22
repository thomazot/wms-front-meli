import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import FormSignIn from '.'

jest.mock('next/router', () => ({ push: jest.fn() }))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change values email and password', () => {
    render(<FormSignIn />)
    const email = screen.getByPlaceholderText(/e-mail/i)
    const password = screen.getByPlaceholderText(/password/i)

    userEvent.type(email, 'email@email.com')
    expect(email.getAttribute('value')).toBe('email@email.com')

    userEvent.type(password, 'password')
    expect(password.getAttribute('value')).toBe('password')

    const button = screen.getByRole('button', { name: /sign in/i })

    userEvent.click(button)
  })

  it('should submit form not called', () => {
    const onSubmit = jest.fn()
    render(<FormSignIn onSubmit={onSubmit} />)
    const button = screen.getByRole('button', { name: /sign in/i })

    userEvent.click(button)

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should submit form called', () => {
    const onSubmit = jest.fn()
    render(<FormSignIn onSubmit={onSubmit} />)

    const button = screen.getByRole('button', { name: /sign in/i })

    const email = screen.getByPlaceholderText(/e-mail/i)
    const password = screen.getByPlaceholderText(/password/i)

    userEvent.type(email, 'email@email.com')
    userEvent.type(password, 'password')

    userEvent.click(button)

    expect(onSubmit).toHaveBeenCalled()
  })
})
