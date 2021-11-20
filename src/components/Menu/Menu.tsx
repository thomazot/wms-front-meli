import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import MenuItem, { MenuItemProps } from 'components/MenuItem/MenuItem'
import * as S from './Menu.styles'

export type MenuProps = {
  items: MenuItemProps[]
}

const Menu = ({ items }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation()
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.MenuFull aria-hidden={!isOpen}>
        <S.MenuNav>
          {items.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </S.MenuNav>
      </S.MenuFull>
      <S.Overlay
        onClick={handleOpen}
        aria-hidden={!isOpen}
        aria-label="Close Menu"
      >
        <S.MenuCloseIcon>
          <CloseIcon />
        </S.MenuCloseIcon>
      </S.Overlay>
    </S.Wrapper>
  )
}

export default Menu
