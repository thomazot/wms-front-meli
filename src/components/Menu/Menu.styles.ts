import styled, { css } from 'styled-components'

export const IconWrapper = styled.button`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
`

export const MenuFull = styled.nav`
  position: fixed;
  width: 30rem;
  max-width: calc(100% - 5rem);
  height: 100%;
  top: 0;
  left: 0;
  z-index: 200;
  background: white;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacings.xsmall} 0;
  li {
    list-style: none;
  }
`

export const Overlay = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  border: none;

  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`

export const MenuNav = styled.ul``

export const MenuCloseIcon = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0.5rem;
    left: 31rem;
    width: 4rem;
    height: 4rem;
    color: white;

    ${theme.breakpoints.mobile} {
      left: auto;
      right: 0.5rem;
    }
  `}
`

const wrapperModifiers = {
  open: () => css`
    ${MenuFull},
    ${Overlay} {
      opacity: 1;
      vsibility: visible;
    }

    ${MenuFull} {
      transform: translateX(0);
    }
  `,
  close: () => css`
    ${MenuFull},
    ${Overlay} {
      opacity: 0;
      visibility: hidden;
    }
    ${MenuFull} {
      transform: translateX(-10px);
    }
  `
}

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    ${MenuFull}, ${Overlay} {
      transition: transform 0.2s ease-in, opacity 0.2s ease-in;
    }
    ${isOpen && wrapperModifiers.open()}
    ${!isOpen && wrapperModifiers.close()}
  `}
`
