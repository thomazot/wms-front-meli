import Showcase from 'components/Showcase'
import * as S from './Home.styles'

import Logo from 'components/Logo'
import Menu from 'components/Menu'

import ShowcaseItems from 'components/Showcase/Showcase.mock'
import MenuItems from 'components/Menu/Menu.mock'

const Home = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Container>
          <Menu items={MenuItems} />
          <Logo />
        </S.Container>
      </S.Header>
      <S.Container as="main">
        <Showcase title="Featured" items={ShowcaseItems} />
      </S.Container>
    </S.Wrapper>
  )
}

export default Home
