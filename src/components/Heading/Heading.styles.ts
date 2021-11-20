import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from './Heading'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
