import styled, { css } from 'styled-components'
import { RatingProps } from './Rating'

const wrapperModifiers = {
  normal: () => css`
    height: 2rem;
  `,
  small: () => css`
    height: 1.5rem;
  `
}

export const Wrapper = styled.div<RatingProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]()}
    letter-spacing: 0.1rem;
    line-height: 1;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      height: 100%;
      width: max-content;
      display: inline-block;
    }
  `}
`
