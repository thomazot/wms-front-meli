import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import { WishlistProvider } from 'hooks/use-wishlist'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <WishlistProvider>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </WishlistProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
