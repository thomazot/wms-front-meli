import Showcase from 'components/Showcase'
import * as S from './Search.styles'

import Logo from 'components/Logo'
import Menu from 'components/Menu'

import { MenuItemProps } from 'components/MenuItem/MenuItem'
import { CardProps } from 'components/Card/Card'
import { default as SearchInput } from 'components/Search'

export type SearchProps = {
  title?: string
  menuItems: MenuItemProps[]
  showcaseItems: CardProps[]
}

const Search = ({ title, menuItems, showcaseItems }: SearchProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Container>
          <Menu items={menuItems} />
          <Logo />
          <SearchInput />
        </S.Container>
      </S.Header>
      <S.Container as="main">
        <Showcase title={title} items={showcaseItems} />
      </S.Container>
    </S.Wrapper>
  )
}

export default Search
