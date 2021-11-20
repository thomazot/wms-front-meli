import Link from 'next/link'

import * as S from './MenuItem.styles'

export type MenuItemProps = {
  id: string
  name: string
}

const MenuItem = ({ id, name }: MenuItemProps) => (
  <S.Wrapper>
    <Link href={`/categories/${id}`} passHref>
      <S.MenuLink>{name}</S.MenuLink>
    </Link>
  </S.Wrapper>
)

export default MenuItem
