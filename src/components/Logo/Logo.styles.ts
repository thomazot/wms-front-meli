import styled, { css, DefaultTheme } from 'styled-components'

import { LogoProps } from './Logo'

const wrapperModifiers = {
  normal: () => css`
    max-width: 11rem;
  `,
  large: () =>
    css`
      max-width: 20rem;
    `,
  hideOnMobile: (theme: DefaultTheme) => css`
    ${theme.breakpoints.mobile} {
      max-width: 5.8rem;
      .text {
        display: none;
      }
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${color === 'white'
      ? theme.colors.brand.tertiary
      : theme.colors.brand.secundary};

    ${!!size && wrapperModifiers[size]()};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile(theme)};
  `}
`
