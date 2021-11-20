import styled, { css } from 'styled-components'

import * as TextFieldStyle from 'components/TextField/TextField.styles'
import * as ButtonStyle from 'components/Button/Button.styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyle.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyle.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`
