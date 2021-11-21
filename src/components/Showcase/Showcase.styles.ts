import styled, { css } from 'styled-components'
import * as HeadingStyle from 'components/Heading/Heading.styles'
import * as CardStyle from 'components/Card/Card.styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${HeadingStyle.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Empty = styled.div``
export const List = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    gap: ${theme.grid.gutter};

    ${Empty},
    ${CardStyle.Wrapper} {
      flex: 1 1 35rem;
      min-width: 0;
    }
  `}
`
