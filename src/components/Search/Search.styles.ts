import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/TextField.styles'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    alight-items: stretch;
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.primary.lightest};
    background: white;
    position: relative;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary.lightest};
    }

    ${TextFieldStyles.Wrapper} {
      flex: 1;
      min-width: 0;
    }
    ${TextFieldStyles.InputWrapper} {
      background: none;
      border: none;
      &:focus-within {
        box-shadow: none;
      }
    }
    ${TextFieldStyles.Error} {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
    }
  `}
`
export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    z-index: 2;
    width: 4rem;
    background: white;
    border: none;
    color: ${theme.colors.primary.default};
    cursor: pointer;
    svg {
      width: 2.5rem;
      height: 2.5em;
    }
  `}
`
