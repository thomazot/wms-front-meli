import Card, { CardProps } from 'components/Card/Card'
import Heading from 'components/Heading'
import * as S from './Showcase.styles'

export type ShowcaseProps = {
  title?: string
  items: CardProps[]
}

const Showcase = ({ title, items }: ShowcaseProps) => (
  <S.Wrapper>
    <Heading size="medium">{title}</Heading>
    <S.List>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      <S.Empty />
      <S.Empty />
      <S.Empty />
    </S.List>
  </S.Wrapper>
)

export default Showcase
