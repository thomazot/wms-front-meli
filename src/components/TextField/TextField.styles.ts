import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from './TextField'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.primary.lightest};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary.lightest};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.base};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    &:-webkit-autofill {
      filter: none;
      &::first-line {
        font-size: ${theme.font.sizes.medium};
      }
    }
    &:focus::placeholder {
      color: transparent;
    }
  `}
`

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.feedback.error.action};
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.feedback.error.active};
    }
    ${Label} {
      color: ${theme.colors.feedback.error.action};
    }
  `,
  disabled: () => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
