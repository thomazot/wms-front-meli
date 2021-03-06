import Showcase from 'components/Showcase'
import * as S from './Home.styles'

import Logo from 'components/Logo'
import Menu from 'components/Menu'

import { MenuItemProps } from 'components/MenuItem/MenuItem'
import { CardProps } from 'components/Card/Card'
import Search from 'components/Search'

export type HomeProps = {
  menuItems: MenuItemProps[]
  showcaseItems: CardProps[]
}

const Home = ({ menuItems, showcaseItems }: HomeProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Container>
          <Menu items={menuItems} />
          <Logo />
          <Search />
        </S.Container>
      </S.Header>
      <S.Container as="main">
        <Showcase title="Featured" items={showcaseItems} />
      </S.Container>
    </S.Wrapper>
  )
}

export default Home
