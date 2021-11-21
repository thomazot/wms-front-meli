import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
    border: none;
    background: none;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${theme.colors.primary.default};
    }
  `}
`
