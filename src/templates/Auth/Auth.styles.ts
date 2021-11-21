import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    box-shadow: inset 0 20rem 0 ${theme.colors.brand.primary};
    background: ${theme.colors.grey.lightest};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    max-width: 90vw;
    padding: ${theme.spacings.small};
    margin: 0 auto;
    background: ${theme.colors.contrast};
    box-shadow: 0 0 0.5rem ${theme.colors.grey.lightest};
    border-radius: ${theme.border.radius};
  `}
`

export const ContentWrapper = styled.div``

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
