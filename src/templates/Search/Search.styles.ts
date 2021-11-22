import styled, { css } from 'styled-components'

import * as LogoStyles from 'components/Logo/Logo.styles'
import * as SearchStyles from 'components/Search/Search.styles'

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
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${theme.colors.brand.primary};
    padding: ${theme.spacings.xxsmall} 0;

    ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: ${theme.grid.gutter};
    }

    ${LogoStyles.Wrapper} {
      flex: 0 0  11rem;
      min-width: 11rem;
    }

    ${SearchStyles.Wrapper} {
      flex: 0 1 50rem;
      min-width: 0;
      margin-left: auto;
    }

    ${theme.breakpoints.mobile} {
      padding: 0;

      ${Container} {
        gap: ${theme.spacings.xxsmall};
      }


  `}
`
