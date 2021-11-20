import styled, { css } from 'styled-components'

export const Wrapper = styled.li``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    text-decoration: none;
    color: ${theme.colors.primary.default};
    list-style: none;

    ${theme.breakpoints.desktop} {
      transition: background 0.2s ease-in-out;
      &:hover {
        background: ${theme.colors.primary.default};
        color: ${theme.colors.primary.lightest};
      }
    }
  `}
`
