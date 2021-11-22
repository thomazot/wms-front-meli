import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    max-width: 100%;

    padding: ${theme.spacings.xsmall};
    box-shadow: 0 0 4px ${theme.colors.grey.lightest};
    border-radius: ${theme.border.radius};
    a {
      display: block;
    }
    img {
      width: 100%;
      object-fit: cover;
    }

    ${theme.breakpoints.desktop} {
      transition: box-shadow 0.3s ease-in-out;
      &:hover {
        box-shadow: 0 0 0 1px ${theme.colors.primary.lightest};
      }
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    flex: 1;
    min-width: 0;
    a {
      display: block;
      color: currentColor;
      text-decoration: none;
      padding: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.medium};
      line-height: 1;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `}
`

export const Wishlist = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Price = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.primary.darkest};
  `}
`
export const Rating = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding-left: ${theme.spacings.xsmall};
  `}
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
