import styled, { css } from 'styled-components'

import * as LogoStyles from 'components/Logo/Logo.styles'

export const Wrapper = styled.div``

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    max-width: calc(100% - ${theme.grid.gutter});
    margin: 0 auto;
    padding: ${theme.spacings.small} 0;
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.brand.primary};
    padding: ${theme.spacings.small} 0;

    ${Container} {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    ${LogoStyles.Wrapper} {
      flex: 1;
      min-width: 0;
      margin-left: ${theme.grid.gutter};
    }

    ${theme.breakpoints.mobile} {
      padding: ${theme.spacings.xxsmall} 0;
    }
  `}
`
